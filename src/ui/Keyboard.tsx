import { IconBackspace } from './icons/IconBackspace'

const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']

const letters2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ']

const letters3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']

// TODO implement logic to create the class acconding given letter right, wrong or notExist

const Button = ({
  letter,
  onClick,
  keysTouched
}: {
  letter: string
  onClick: () => void
  keysTouched: string[]
}) => {
  return (
    <button
      className={`bg-bgGray2 dark:bg-dark-bgGray2 rounded text-sm w-8 h-8 lg:text-lg md:w-16 md:h-16 m-2 flex justify-center items-center hover:bg-gray overflow-hidden ${
        keysTouched.includes(letter.toLocaleUpperCase())
          ? 'bg-letterTouched dark:bg-dark-letterTouched'
          : ''
      }`}
      onClick={onClick}
    >
      {letter === 'BACK' ? <IconBackspace /> : letter}
    </button>
  )
}

export const Keyboard = ({
  onClick,
  keysTouched
}: {
  onClick: (str: string) => void
  keysTouched: string[]
}) => {
  return (
    <div className="container bg-backgroundCard dark:bg-dark-backgroundCard px-2 dark:text-white">
      <div className="ml-0 md:ml-3 container grid grid-cols-10">
        {letters.map((letter) => {
          return (
            <Button
              key={letter}
              onClick={() => onClick(letter)}
              letter={letter}
              keysTouched={keysTouched}
            />
          )
        })}
      </div>
      <div className="ml-0 md:ml-6 container grid grid-cols-10">
        {letters2.map((letter) => (
          <Button
            key={letter}
            onClick={() => onClick(letter)}
            letter={letter}
            keysTouched={keysTouched}
          />
        ))}
      </div>
      <div className="container grid grid-cols-10">
        {letters3.map((letter) => (
          <Button
            key={letter}
            onClick={() => onClick(letter)}
            letter={letter}
            keysTouched={keysTouched}
          />
        ))}
      </div>
    </div>
  )
}
