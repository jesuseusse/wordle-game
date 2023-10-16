export function getPosition(i: number) {
  if (i < 5) return i
  return getPosition(i - 5)
}

export const normalizeLtr = (str: string) => {
  if (!str) return ''
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
}

export const isPositionRight = (ltr1: string, ltr2: string) => {
  if (ltr1 === undefined || ltr2 === undefined) return false
  return normalizeLtr(ltr1) === normalizeLtr(ltr2)
}

export const exitsInWord = (word: string[], ltr: string) => {
  const newArr = word.map((ltr) => normalizeLtr(ltr))
  return newArr.includes(normalizeLtr(ltr))
}
