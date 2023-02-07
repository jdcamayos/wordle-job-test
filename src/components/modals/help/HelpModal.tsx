import * as React from 'react'
import HelpButton from './HelpButton'
import LetterCard from '../../LetterCard'
import Modal from '../Modal'
import useSession from '@/hooks/useSession'
import { CardColor } from '@/types'

export default function HelpModal() {
  const [open, setOpen] = React.useState(false)
  const { firstVisit, saveFirstVisit, loading } = useSession()

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    if (!firstVisit) {
      saveFirstVisit()
    }
    setOpen(false)
  }

  React.useEffect(() => {
    if (!loading && !firstVisit) {
      handleOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <>

      <HelpButton onClick={handleOpen} />
      {open && <Modal>
        <div className='flex flex-col gap-1 p-1 sm:p-0 lg:p-2 md:px-4 md:pt-2 2xl:gap-4'>
          <h2 className='font-bold text-center  text-[20px] sm:text-[28px] md:text-[35px] '>Cómo jugar</h2>
          <p className='pt-2 text-xs sm:text-base'>
            Adivina la palabra oculta en cinco intentos.
          </p>
          <p className='text-xs sm:text-base'>
            Cada intento debe ser una palabra válida de 5 letras.
          </p>
          <p className='text-xs sm:text-base'>
            Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
          </p>
          <h3 className='font-bold text-[14px] sm:text-[19px]'>Ejemplos</h3>
          <div className='flex gap-[11px] justify-center'>
            {'GATOS'.split('')
              .map((letter, i) => ({ id: `${i}-${letter}`, value: letter, color: (letter === 'G' ? 'green' : 'line') as CardColor }))
              .map(letter => (
                <LetterCard key={letter.id} color={letter.color}>
                  {letter.value}
                </LetterCard>
              ))
            }
          </div>
          <p className='text-xs sm:text-base'>
            La letra <strong>G</strong> está en la palabra y en la posición correcta.
          </p>
          <div className='flex gap-[11px] justify-center'>
            {'VOCAL'.split('')
              .map((letter, i) => ({ id: `${i}-${letter}`, value: letter, color: (letter === 'C' ? 'gold' : 'line') as CardColor }))
              .map(letter => (
                <LetterCard key={letter.id} color={letter.color}>
                  {letter.value}
                </LetterCard>
              ))
            }
          </div>
          <p className='text-xs sm:text-base'>
            La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.
          </p>
          <div className='flex gap-[11px] justify-center'>
            {'CANTO'.split('')
              .map((letter, i) => ({ id: `${i}-${letter}`, value: letter, color: (letter === 'C' ? 'gold' : 'line') as CardColor }))
              .map(letter => (
                <LetterCard key={letter.id} color={letter.color}>
                  {letter.value}
                </LetterCard>
              ))
            }
          </div>
          <p className='text-xs sm:text-base'>
            La letra <strong>O</strong> no está en la palabra.
          </p>
          <p className='p-2 text-xs sm:text-base'>
            Puede haber letras repetidas. Las pistas son independientes para cada letra.
          </p>
          <p className='p-1 text-xs text-center 2xl:p-4 sm:text-base'>
            ¡Una palabra nueva cada 5 minutos!
          </p>
          <div className='grid place-content-center'>
            <button onClick={handleClose} className='px-2 sm:px-20 py-1 text-[20px] sm:text-[28px] font-bold text-[white] bg-my-green rounded-[5px] w-[160px] sm:w-[260px]'>
              ¡JUGAR!
            </button>
          </div>
        </div>
      </Modal>}
    </>
  )
}
