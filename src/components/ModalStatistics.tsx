import { useEffect, useRef, useState } from 'react'
import { Statistics } from '../types/statistic'
import { Modal } from '../ui/Modal'

interface Props {
  statistics: Statistics
  onClose: () => void
  word?: string
}

const formatTimer = (totalSeconds: number) => {
  if (totalSeconds < 0) return '00:00'
  totalSeconds %= 3600
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const strMinutes = String(minutes).padStart(2, '0')
  const strSeconds = String(seconds).padStart(2, '0')

  return strMinutes + ':' + strSeconds
}

export const ModalStatistics = ({ statistics, onClose, word }: Props) => {
  const [canClose, setCanClose] = useState(false)
  const [time, setTime] = useState(Date.now())

  const now = useRef(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      if (now.current + 5 * 60 * 1000 < Date.now()) setCanClose(true)
      setTime(Date.now())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Modal>
      <h2 className="font-extrabold text-center">Estadística</h2>
      <div className="container flex justify-spacebetween p-4 w-[300px]">
        <div className="container text-center">
          <p className="font-extrabold">{statistics.totalGames}</p>
          <h2>Jugadas</h2>
        </div>
        <div className="container text-center">
          <p className="font-extrabold">{statistics.totalWon}</p>
          <h2>Victorias</h2>
        </div>
      </div>
      <div className="container flex flex-col text-center my-2">
        {word && (
          <p className="my-2">
            La palabra es <b>{word.toLocaleUpperCase()}</b>
          </p>
        )}
        <p className="my-2">SIGUIENTE PALABRA</p>
        <h2 className="font-extrabold">
          {formatTimer(
            300 + Math.floor((60 * 5 - (time - now.current)) / 1000)
          )}
        </h2>
      </div>
      <div className="text-center">
        <button
          disabled={!canClose}
          className="rounded bg-primary disabled:bg-gray px-10 py-2 mt-2 hover:bg-primary-500"
          onClick={canClose ? onClose : () => {}}
        >
          Aceptar
        </button>
      </div>
    </Modal>
  )
}
