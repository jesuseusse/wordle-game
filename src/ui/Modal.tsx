interface Props {
  children: JSX.Element[] | JSX.Element
}

export const Modal = ({ children }: Props) => {
  return (
    <div className="absolute h-screen w-screen flex justify-center items-center modal z-[1000]">
      <div className="max-w-2xl border-solid border-2 border-gray rounded bg-white dark:bg-dark-backgroundBody p-4 dark:text-white">
        {children}
      </div>
    </div>
  )
}
