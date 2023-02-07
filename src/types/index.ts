import { ReactNode } from "react";

export interface RFC {
  children: ReactNode
}

export type CardColor = 'gold' | 'grey' | 'green' | 'none'

export type BoardCard = null | {
  value: string
  color: CardColor
}

export type GameStatus = 'win' | 'lose' | 'playing'