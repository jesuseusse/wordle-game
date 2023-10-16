interface Props {
  letter: string
  exist?: boolean
  isRight?: boolean
}

export const LetterBtn = ({ letter, exist, isRight }: Props) => {
  return (
    <button
      className={`bg-bgGray2 dark:bg-dark-bgGray2 rounded w-16 h-16 m-2  ${
        !exist && letter !== '' ? 'bg-gray dark:bg-gray' : ''
      } ${exist && !isRight ? 'bg-secondary dark:bg-secondary' : ''} ${
        isRight ? 'bg-primary dark:bg-primary' : ''
      }`}
    >
      {letter}
    </button>
  )
}
