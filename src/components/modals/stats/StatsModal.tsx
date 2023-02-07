import useGame from '@/hooks/useGame';
import { convertSecondsToMinutes } from '@/utils/convertSecondsToMinutes';
import * as React from 'react'
import Modal from "../Modal";
import StatsButton from "./StatsButton";

export default function StatsModal() {
  const { gameStatus, seconds, wordSelected, plays, wons, restartGame } = useGame()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    if (gameStatus !== 'playing') {
      setOpen(false)
      restartGame()
    } else {
      setOpen(false)
    }
  }

  React.useEffect(() => {
    if (gameStatus !== 'playing' && seconds !== 0) {
      setOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus])

  return (
    <>
      <StatsButton onClick={handleOpen} />
      {open && <Modal>
        <div className='flex flex-col gap-5 p-1 md:p-4'>
          <h2 className='text-center text-[20px] md:text-[35px] font-bold'>Estadísticas</h2>
          <div className='flex justify-around pt-2 pb-8'>
            <div className='flex flex-col items-center gap-1 px-2'>
              <span className='text-[35px] font-bold'>{plays}</span>
              <span>Jugadas</span>
            </div>
            <div className='flex flex-col items-center gap-1 px-2'>
              <span className='text-[35px] font-bold'>{wons}</span>
              <span>Victorias</span>
            </div>
          </div>
          {gameStatus !== 'playing' && <div className='flex flex-col items-center gap-1 px-2'>
            <span className='text-[19px]'>La palabra era: <strong>{wordSelected}</strong></span>
          </div>}
          <div className='flex flex-col items-center gap-1 px-2'>
            <span className='text-[19px]'>SIGUIENTE PALABRA</span>
            <span className='text-[19px] font-bold'>{convertSecondsToMinutes(seconds)}</span>
          </div>
          <div className='grid pt-8 place-content-center'>
            <button onClick={handleClose} className='px-2 sm:px-20 py-1 text-[28px] font-bold text-[white] bg-my-green rounded-[5px] w-[160px] sm:w-[260px]'>
              Aceptar
            </button>
          </div>
        </div>
      </Modal>}
    </>
  )
}
