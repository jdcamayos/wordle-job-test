/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

interface Props {
  activeKey: boolean
  value: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => void
}

export default function KeyboardKey(props: Props) {
  const { value, activeKey, onClick } = props
  const bgColor = activeKey ? 'bg-my-grey' : 'bg-[#D3D6DA]'

  if (value === 'ENTER') return (
    <button key={value} onClick={e => onClick(e, value)} className={`font-semibold text-sm md:text-lg py-1 px-0 md:p-2 ${bgColor} active:bg-gray-800 h-[30px] w-[50px] md:h-[51px] md:w-[72px] rounded-[5px] text-[#56575E]`}>
      {value}
    </button>
  )

  if (value === 'BACKSPACE') return (
    <button key={value} onClick={e => onClick(e, value)} className={`font-semibold text-sm md:text-lg py-1 px-1 md:p-2 ${bgColor} active:bg-gray-800 h-[30px] w-[35px] md:h-[51px] md:w-[72px] rounded-[5px] text-[#56575E] grid place-content-center`}>
      <img src='/assets/Union.svg' alt='erase-icon' />
    </button>
  )

  return (
    <button key={value} onClick={e => onClick(e, value)} className={`font-semibold text-sm md:text-lg py-1 px-1 md:p-2 ${bgColor} active:bg-gray-800 h-[30px] w-[22px] md:h-[51px] md:w-[44px] rounded-[5px] text-[#56575E]`}>
      {value}
    </button>
  )
}
