import { CardColor, RFC } from '@/types'
import React from 'react'

type CardColorExtends = CardColor | 'line'

interface Props extends Partial<RFC> {
  color: CardColorExtends
}

export default function LetterCard(props: Props) {
  const { color } = props

  if (color === 'green') return (
    <div className={`h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px]  2xl:h-[76px] 2xl:w-[76px] bg-my-green rounded-[5px] text-[30px] sm:text-[35px] font-extrabold grid place-content-center text-[#FFF]`}>
      {props.children}
    </div>
  )

  if (color === 'gold') return (
    <div className={`h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px]  2xl:h-[76px] 2xl:w-[76px] bg-my-gold rounded-[5px] text-[30px] sm:text-[35px] font-extrabold grid place-content-center text-[#FFF]`}>
      {props.children}
    </div>
  )

  if (color === 'grey') return (
    <div className={`h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px]  2xl:h-[76px] 2xl:w-[76px] bg-my-grey rounded-[5px] text-[30px] sm:text-[35px] font-extrabold grid place-content-center text-[#FFF]`}>
      {props.children}
    </div>
  )

  if (color === 'line') return (
    <div className={`h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px]  2xl:h-[76px] 2xl:w-[76px] bg-[white] dark:bg-dark-bg-alt rounded-[5px] text-[30px] sm:text-[35px] font-extrabold grid place-content-center text-[#000] dark:text-[#FFF] border border-[black] dark:border-[#939B9F]`}>
      {props.children}
    </div>
  )

  if (color === 'none') return (
    <div className={`h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px]  2xl:h-[76px] 2xl:w-[76px] bg-[white] dark:bg-dark-bg-alt rounded-[5px] text-[30px] sm:text-[35px] font-extrabold grid place-content-center text-[#000] border border-[black] dark:border-none`}>
      {props.children}
    </div>
  )

  return null
}
