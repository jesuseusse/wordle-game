import { useEffect, useState } from 'react'

export const useGetWords = () => {
  const [words, setWords] = useState<string[]>([])
  const [word, setWord] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const getWords = async () => {
    setLoading(true)
    const words = await fetch('./words.txt')
    const readText = await words.text()
    const wordsArray = await readText
      .split('\n')
      .filter((word) => word.length === 5)
    setWords(wordsArray)
    setLoading(false)
  }

  const getNewWord = () => {
    const min = 0
    const max = words.length
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    setWord(words[random].split(''))
  }

  useEffect(() => {
    getWords()
  }, [])

  return { loading, words, word, getNewWord }
}
