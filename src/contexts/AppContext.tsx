import * as services from '@/services'
import { BoardCard, GameStatus, RFC } from '@/types'
import { compareStringsValidation } from '@/utils/compareStringsValidation'
import { findNextLetterIndex } from '@/utils/findNextLetterIndex'
import { removeAccents } from '@/utils/removeAccents'
import * as React from 'react'

export type AppContextType = {
  firstVisit: number,
  loading: boolean,
  seconds: number,
  plays: number,
  wons: number,
  wordSelected: string | null
  nextWord: string | null
  board: Array<Array<BoardCard | null>>,
  gameStatus: GameStatus
  toggleTheme: () => void,
  saveFirstVisit: () => void,
  addLetter: (letter: string) => void
  restartGame: () => void
}

export const AppContext = React.createContext<AppContextType>({} as AppContextType)

const INITIAL_BOARD: Array<Array<BoardCard | null>> = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
]

const TIME_TO_RESET_IN_SECONDS = 5 * 60

export default function AppContextProvider(props: RFC) {
  // Theme
  const [darkMode, setDarkMode] = React.useState(false)
  // Words
  const [words, setWords] = React.useState<string[]>([])
  // Status
  const [loading, setLoading] = React.useState(true)
  const [firstVisit, setFirstVisit] = React.useState(0)
  const [gameStatus, setGameStatus] = React.useState<GameStatus>('playing')
  const [plays, setPlays] = React.useState(0)
  const [wons, setWons] = React.useState(0)
  // Words
  const [wordSelected, setWordSelected] = React.useState<string | null>(null)
  const [nextWord, setNextWord] = React.useState<string | null>(null)
  // Board
  const [board, setBoard] = React.useState<Array<Array<BoardCard | null>>>(INITIAL_BOARD)
  // Location
  const [activeRow, setActiveRow] = React.useState(0)
  // Counter
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    if (gameStatus === 'playing') {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStatus]);

  React.useEffect(() => {
    if (seconds % TIME_TO_RESET_IN_SECONDS === 0) {
      // Restart game
      if (wordSelected && seconds !== 0) {
        setGameStatus('lose')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  React.useEffect(() => {
    // Verifies if the user has already visited the page and saves the status
    if (!firstVisit) {
      getFirstVisit()
    }
    // If there are no words, load words from the api
    if (!words.length) {
      fetchWords()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchWords = async () => {
    try {
      setLoading(true)
      const words = await services.getWords() as string[]
      const wordsWithoutAccents = words.map(word => removeAccents(word))
      selectWord(wordsWithoutAccents)
      setWords(words)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const selectWord = (words: string[], wordSelected?: string) => {
    if (!!wordSelected) {
      const wordIndex = words.findIndex(word => word === wordSelected)
      setWordSelected(words[wordIndex + 1])
      setNextWord(words[wordIndex + 2])
    } else {
      setWordSelected(words[0])
      setNextWord(words[1])
    }
  }

  const saveFirstVisit = () => {
    window.localStorage.setItem('flagFirstTime', new Date().getTime().toString())
  }

  const getFirstVisit = () => {
    const firstTimeData = window.localStorage.getItem('flagFirstTime')
    const firstTime = !!firstTimeData ? Number(firstTimeData) : 0
    setFirstVisit(firstTime)
  }

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  const addLetter = (letter: string) => {
    if (letter.length > 1) return
    const [rowIndex, colIndex] = findNextLetterIndex(board)
    if (rowIndex < 0 || colIndex < 0) return
    if (colIndex === 4) setActiveRow(rowIndex + 1)
    let boardCopy = [...board]
    console.log('after', boardCopy[rowIndex][colIndex])
    boardCopy[rowIndex][colIndex] = ({ value: letter, color: 'grey' })
    console.log('before', boardCopy[rowIndex][colIndex])
    setBoard(boardCopy)
  }

  // TODO:
  const removeWord = () => {

  }

  React.useEffect(() => {
    if (!wordSelected || activeRow === 0 || gameStatus !== 'playing') return
    console.log('Validation worked')
    let boardCopy = [...board]
    const word = board[activeRow - 1].map(card => card?.value).join('')
    const boardWord: BoardCard[] = compareStringsValidation(word, wordSelected)
    const rowWins = boardWord.every(letter => letter?.color === 'green')
    if (rowWins) {
      setGameStatus('win')
      setPlays(prev => prev + 1)
      setWons(prev => prev + 1)
    }
    if (activeRow - 1 === 4 && !rowWins) {
      setGameStatus('lose')
      setPlays(prev => prev + 1)
    }
    boardCopy[activeRow - 1] = boardWord
    setBoard(boardCopy)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRow])

  const restartGame = () => {
    if (wordSelected) {
      setBoard([
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
      ])
      setGameStatus('playing')
      setSeconds(0)
      setActiveRow(0)
      selectWord(words, wordSelected)
    }
  }

  const values: AppContextType = {
    restartGame,
    toggleTheme,
    firstVisit,
    saveFirstVisit,
    loading,
    plays,
    wons,
    seconds,
    wordSelected,
    nextWord,
    board,
    gameStatus,
    addLetter,
  }
  return (
    <AppContext.Provider value={values}>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="min-h-screen transition-all duration-300 bg-light-bg dark:bg-dark-bg">
          {props.children}
        </div>
      </div>
    </AppContext.Provider>
  )
}
