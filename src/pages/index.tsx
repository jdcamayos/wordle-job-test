import * as React from 'react'
import Head from 'next/head'
import HelpModal from '@/components/modals/help/HelpModal'
import Keyboard from '@/components/keyboard/Keyboard'
import LetterCard from '@/components/LetterCard'
import StatsModal from '@/components/modals/stats/StatsModal'
import ThemeSwitch from '@/components/ThemeSwitch'
import useGame from '@/hooks/useGame'
import { convertSecondsToMinutes } from '@/utils/convertSecondsToMinutes'
import { BoardCard } from '@/types'

export default function Home() {
  const { board, wordSelected, seconds } = useGame()
  const [boardToRender, setBoardToRender] = React.useState<BoardCard[]>([])

  React.useEffect(() => {
    const boardRender = board.reduce((acc, curr) => {
      acc = [...acc, ...curr]
      return acc
    }, [])
    setBoardToRender(boardRender)
  }, [board])

  return (
    <>
      <Head>
        <title>WORDLE</title>
        <meta name="description" content="WORDLE by @jdcamayos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col items-center justify-around min-h-screen gap-5 py-4'>
        <header className='grid grid-cols-3 bg-[#F3F3F3] dark:bg-dark-bg-alt rounded-2xl px-6 w-full py-2 max-w-[638px] dark:text-[#DADCE0]'>
          <div className='flex items-center justify-start'>
            <HelpModal />
          </div>
          <div className='flex items-center justify-start'>
            <h1 className='font-semibold text-[20px] sm:text-[40px]'>WORDLE</h1>
          </div>
          <div className='flex items-center justify-end gap-1 sm:gap-3'>
            <StatsModal />
            <ThemeSwitch />
          </div>
        </header>
        <section className='grid place-content-center'>
          <div className='grid grid-cols-5 grid-rows-5 gap-[2px] sm:gap-[5px] lg:gap-[11px]'>
            {boardToRender.map((card, index) => !!card ? (
              <LetterCard key={`card-${index}`} color={card.color}>
                {card.value}
              </LetterCard>
            ) : (
              <LetterCard key={`card-${index}`} color='none' />
            ))}
          </div>
        </section>
        <Keyboard />
      </div>
    </>
  )
}
