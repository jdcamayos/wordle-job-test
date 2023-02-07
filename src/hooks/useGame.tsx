import { AppContext } from '@/contexts/AppContext'
import * as React from 'react'

export default function useGame() {
  const context = React.useContext(AppContext)
  if (context === undefined) throw new Error('useGame must be inside a AppContextProvider')
  const { board, wordSelected, addLetter, seconds, gameStatus, wons, plays, restartGame } = context
  return { board, wordSelected, addLetter, seconds, gameStatus, wons, plays, restartGame }
}
