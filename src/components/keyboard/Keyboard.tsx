import useGame from '@/hooks/useGame';
import * as React from 'react'
import KeyboardKey, { KeyStatusColor } from '../KeyboardKey';
import KeyboardRow from '../KeyboardRow';

interface KeyType {
  value: string
  status: KeyStatusColor
}

const KEYBOARD_KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
]

const KEYBOARD_KEYS_ARRAY = KEYBOARD_KEYS.reduce((acc, curr) => {
  acc = [...acc, ...curr]
  return acc
}, [])

export default function Keyboard() {
  const [activeKey, setActiveKey] = React.useState("");
  const { addLetter, gameStatus, board } = useGame()
  const [keys, setKeys] = React.useState<Array<Array<KeyType>>>([])
  const [keysPressed, setKeysPressed] = React.useState([])

  React.useEffect(() => {
    if (!keys.length) {
      const keys: Array<Array<KeyType>> = KEYBOARD_KEYS.map(keysRow => keysRow.map(value => ({ value, status: 'grey' })))
      setKeys(keys)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    const keysPressed = board.reduce((acc, curr) => {
      const wordArray = curr.map(word => word)
      acc = [...acc, ...wordArray]
      return acc
    }, [])
    const keysGreen = keysPressed.filter(key => key?.color === 'green').map(key => key?.value)
    const keysGold = keysPressed.filter(key => key?.color === 'gold').map(key => key?.value)
    const keysGrey = keysPressed.filter(key => key?.color === 'grey').map(key => key?.value)
    const keys: Array<Array<KeyType>> = KEYBOARD_KEYS.map(keysRow => keysRow.map(value => {
      if (keysGreen.includes(value)) {
        return { value, status: 'green' }
      } else if (keysGold.includes(value)) {
        return { value, status: 'gold' }
      } else if (keysGrey.includes(value)) {
        return { value, status: 'grey' }
      } else {
        return { value, status: 'none' }
      }
    }))
    console.log({ keysPressed, keysGreen, keysGold, keysGrey, keys })
    setKeys(keys)
  }, [board])


  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => {
    handleChangeInput(value)
    handleEffect(value)
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    handleChangeInput(event.key)
    handleEffect(event.key);
  };

  const handleEffect = (key: string) => {
    setActiveKey(key);
    setTimeout(() => setActiveKey(""), 300);
  }

  const handleChangeInput = (keyInput: string) => {
    // Validate if the key is in the KEYBOARD_KEYS
    console.log({ keyInput })
    if (gameStatus !== 'playing') return
    const keyToValidate = keyInput.toLocaleUpperCase()

    if (KEYBOARD_KEYS_ARRAY.includes(keyToValidate)) {
      if (keyToValidate === 'BACKSPACE') {
        // setInput(prev => prev.split("").slice(0, prev.length - 1).join('')
        // )
      }
      // TODO: Add function canBackspace
      // if (keyToValidate === 'ENTER' && input.length === 5) {
      //   // addWord(keyToValidate)
      //   // setInput('')
      // }
      if (keyToValidate !== 'BACKSPACE' && keyToValidate !== 'ENTER') {
        addLetter(keyToValidate)
        // setInput(prev => prev.length + 1 > 5 ? prev : prev + keyToValidate)
      }
    }
  }

  // React.useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <section>
      <div className='h-full w-full lg:h-max-[238px] lg:w-max-[638px] rounded-[15px] px-[5px] sm:px-[20px] flex flex-col gap-[9px] bg-[#F3F3F3] dark:bg-dark-bg-alt py-[15px] xl:py-[33.5px]'>
        {keys.map((row, i) => (
          <KeyboardRow key={`row-${i}`} rowIndex={i}>
            {row.map(key => (
              <KeyboardKey key={key.value} value={key.value} onClick={handleClick} activeKey={activeKey.toLocaleUpperCase() === key.value} status={key.status} />
            ))}
          </KeyboardRow>
        ))}
      </div>
    </section>
  )
}
