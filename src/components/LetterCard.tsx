import { CardColor, RFC } from '@/types'
import React from 'react'

type CardColorExtends = CardColor | 'line'

interface Props extends Partial<RFC> {
  color: CardColorExtends
}

export default function LetterCard(props: Props) {
  const { color } = props

  if (color === 'green') return (
    <div className={`h-[76px] w-[76px] bg-my-green rounded-[5px] text-[35px] font-extrabold grid place-content-center text-[#FFF]`}>
      {props.children}
    </div>
  )

  if (color === 'gold') return (
    <div className={`h-[76px] w-[76px] bg-my-gold rounded-[5px] text-[35px] font-extrabold grid place-content-center text-[#FFF]`}>
      {props.children}
    </div>
  )

  if (color === 'grey') return (
    <div className={`h-[76px] w-[76px] bg-my-grey rounded-[5px] text-[35px] font-extrabold grid place-content-center text-[#FFF]`}>
      {props.children}
    </div>
  )

  if (color === 'line') return (
    <div className={`h-[76px] w-[76px] bg-[white] dark:bg-dark-bg-alt rounded-[5px] text-[35px] font-extrabold grid place-content-center text-[#000] dark:text-[#FFF] border border-[black] dark:border-[#939B9F]`}>
      {props.children}
    </div>
  )

  if (color === 'none') return (
    <div className={`h-[76px] w-[76px] bg-[white] dark:bg-dark-bg-alt rounded-[5px] text-[35px] font-extrabold grid place-content-center text-[#000] border border-[black] dark:border-none`}>
      {props.children}
    </div>
  )

  return null
}
