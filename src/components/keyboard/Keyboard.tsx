import useGame from '@/hooks/useGame';
import * as React from 'react'
import KeyboardKey from '../KeyboardKey';
import KeyboardRow from '../KeyboardRow';

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
  // const [input, setInput] = React.useState("");
  const [activeKey, setActiveKey] = React.useState("");
  const { addLetter } = useGame()

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
    setTimeout(() => setActiveKey(""), 250);
  }

  const handleChangeInput = (keyInput: string) => {
    // Validate if the key is in the KEYBOARD_KEYS
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

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React.useEffect(() => {
  //   console.log({ activeKey, input })
  // }, [activeKey, input])

  return (
    <>
      {/* <p>{input}</p> */}
      <section>
        <div className='h-full w-full lg:h-max-[238px] lg:w-max-[638px] rounded-[15px] px-[5px] sm:px-[20px] flex flex-col gap-[9px] bg-[#F3F3F3] dark:bg-dark-bg-alt py-[15px] xl:py-[33.5px]'>
          {KEYBOARD_KEYS.map((row, i) => (
            <KeyboardRow key={`row-${i}`} rowIndex={i}>
              {row.map(key => (
                <KeyboardKey key={key} value={key} onClick={handleClick} activeKey={activeKey.toLocaleUpperCase() === key} />
              ))}
            </KeyboardRow>
          ))}
        </div>
      </section>
    </>
  )
}
