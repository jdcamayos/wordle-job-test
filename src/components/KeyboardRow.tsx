import { RFC } from '@/types'
import React from 'react'

interface Props extends RFC {
  rowIndex: number
}

export default function KeyboardRow(props: Props) {
  const alignStyle: Record<number, string> = {
    0: 'justify-center',
    1: 'justify-center pl-6',
    2: ''
  }
  return (
    <div className={`flex gap-[9px] ${alignStyle[props.rowIndex]}`}>{props.children}</div>
  )
}
