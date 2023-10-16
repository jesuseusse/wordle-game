import { Modal } from '../ui/Modal'

export const ModalInstructions = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal>
      <h2 className="text-center font-extrabol text-3xl">Cómo jugar</h2>
      <p className="text-center text-lg">
        Adivina la palabra oculta en cinco intentos. <br />
        Cada intento debe ser una palabra válida de 5 letras. <br />
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>
      <p className="text-left font-extrabold text-lg">Ejemplos:</p>
      <div className="container flex justify-center">
        <button className="dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2 bg-primary dark:bg-primary">
          G
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          A
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          T
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          O
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          S
        </button>
      </div>
      <p className="text-left text-lg">
        La letra <b>G</b> está en la palabra y en la posición correcta.
      </p>
      <div className="container flex justify-center">
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          V
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          O
        </button>
        <button className="bg-secondary dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2 dark:bg-secondary">
          C
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          A
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          L
        </button>
      </div>
      <p className="text-left text-lg">
        La letra <b>C</b> está en la palabra pero en la posición incorrecta.
      </p>
      <div className="container flex justify-center">
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          C
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          A
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          N
        </button>
        <button className="bg-bgGray2 dark:bg-dark-backgroundBody dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          T
        </button>
        <button className="bg-gray dark:bg-gray dark:border-white dark:border-2 dark:border-solid rounded w-16 h-16 m-2">
          O
        </button>
      </div>
      <p className="text-left text-lg">
        La letra <b>O</b> no está en la palabra.
      </p>
      <p className="my-5">
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </p>
      <p className="my-5">¡Una palabra nueva cada 5 minutos!</p>
      <div className="text-center">
        <button
          className="rounded bg-primary p-4 hover:bg-primary-500"
          onClick={onClose}
        >
          ¡JUGAR!
        </button>
      </div>
    </Modal>
  )
}
