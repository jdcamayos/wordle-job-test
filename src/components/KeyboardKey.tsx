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
    <button key={value} onClick={e => onClick(e, value)} className={`font-semibold text-lg p-2 ${bgColor} active:bg-gray-800 h-[51px] w-[72px] rounded-[5px] text-[#56575E]`}>
      {value}
    </button>
  )

  if (value === 'BACKSPACE') return (
    <button key={value} onClick={e => onClick(e, value)} className={`font-semibold text-lg p-2 ${bgColor} active:bg-gray-800 h-[51px] w-[72px] rounded-[5px] text-[#56575E] grid place-content-center`}>
      <img src='/assets/Union.svg' alt='erase-icon' />
    </button>
  )

  return (
    <button key={value} onClick={e => onClick(e, value)} className={`font-semibold text-lg p-2 ${bgColor} active:bg-gray-800 h-[51px] w-[44px] rounded-[5px] text-[#56575E]`}>
      {value}
    </button>
  )
}
