import { useEffect, useState } from 'react'
import { Keyboard } from './ui/Keyboard'
import { IconQuestion } from './ui/icons/IconQuestion'
import { IconStadistic } from './ui/icons/IconStadistic'
import { LetterBtn } from './ui/LetterBtn'
import { useGetWords } from './hooks/useGetWord'
import { ModalInstructions } from './components/ModalInstructions'
import { Statistics } from './types/statistic'
import { ModalStatistics } from './components/ModalStatistics'
import {
  exitsInWord,
  getPosition,
  isPositionRight,
  normalizeLtr
} from './utils/utils'
import { SwitchDarkMode } from './components/SwitchDarkMode'

const arrayLetters = new Array(25).fill('')

function App() {
  const [isDark, setIsDark] = useState(false)
  const [showInstructor, setShowInstruction] = useState(true)
  const [keysTouched, setKeysTouched] = useState<string[]>([])
  const [statistics, setStatistics] = useState<Statistics>({
    totalGames: 1,
    totalWon: 0
  })
  const { loading, word, getNewWord } = useGetWords()
  const [showStatistics, setShowStatistics] = useState(false)

  const onClick = (ltr: string) => {
    if (ltr === 'BACK' || ltr === 'ENTER') {
      //TODO function to do something with 'enter' or 'back'
      return
    }
    setKeysTouched((prev) => [...prev, ltr])
  }

  const closeStatistics = () => {
    setShowStatistics(false)
    getNewWord()
  }

  useEffect(() => {
    if (word.length && keysTouched.length % 5 === 0) {
      const compareWord = keysTouched
        .slice(-5)
        .map((key) => normalizeLtr(key))
        .join('')
      const currentWord = word.map((ltr) => normalizeLtr(ltr)).join('')
      if (currentWord == compareWord) {
        setStatistics((prev) => ({ ...prev, totalWon: prev.totalWon + 1 }))
        setShowStatistics(true)
        setKeysTouched([])
      }
    }
    if (keysTouched.length > 24) {
      setShowStatistics(true)
      setKeysTouched([])
    }
  }, [keysTouched, word])

  const closeModal = () => {
    setShowInstruction(false)
    // Local storage
    localStorage.setItem('instructorWasDisplayed', 'true')
  }

  useEffect(() => {
    if (!loading) getNewWord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  useEffect(() => {
    if (localStorage.getItem('instructorWasDisplayed') == 'true')
      setShowInstruction(false)
  }, [])

  useEffect(() => {
    const event = (e: KeyboardEvent) => {
      const regex = new RegExp(/([A-Za-zñNÑ])/)
      if (regex.test(e.key)) {
        onClick(e.key.toUpperCase())
      }
    }
    if (!showStatistics && !showInstructor) {
      window.addEventListener('keypress', event)
    }

    return () => {
      window.removeEventListener('keypress', event)
    }
  }, [showInstructor, showStatistics])

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      const body = document.querySelector('body')
      body?.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }, [])

  const onChageTheme = () => {
    const body = document.querySelector('body')
    if (body?.classList.contains('dark')) {
      body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      body?.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <div className="h-screen bg-white dark:bg-dark-backgroundBody flex flex-col m-auto justify-center items-center  w-screen px-0 lg:px-40 2xl:px-60 ">
      {showInstructor && <ModalInstructions onClose={closeModal} />}
      {showStatistics && (
        <ModalStatistics
          statistics={statistics}
          onClose={closeStatistics}
          word={word.join('')}
        />
      )}
      <div className="container flex bg-backgroundCard dark:bg-dark-backgroundCard rounded h-16 justify-space-between items-center p-4 dark:text-white">
        <button onClick={() => setShowInstruction(true)}>
          <IconQuestion />
        </button>
        <p className="font-semibold	 text-4xl	text-center	flex-1 ">WORDLE</p>
        <IconStadistic />
        <SwitchDarkMode isDark={isDark} onChange={onChageTheme} />
      </div>
      <div className="container grid grid-cols-5 justify-center p-6 w-auto">
        {!loading &&
          arrayLetters.map((_, i) => {
            return (
              <LetterBtn
                key={i}
                letter={keysTouched[i] || ''}
                exist={exitsInWord(word, keysTouched[i])}
                isRight={isPositionRight(word[getPosition(i)], keysTouched[i])}
              />
            )
          })}
      </div>
      <Keyboard keysTouched={keysTouched} onClick={onClick} />
    </div>
  )
}
export default App
