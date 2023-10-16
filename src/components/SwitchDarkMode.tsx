import './SwitchDarkMode.css'

interface Props {
  isDark: boolean
  onChange: () => void
}

export const SwitchDarkMode = ({ isDark, onChange }: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        id="dark-mode"
        checked={isDark}
        onChange={onChange}
      />
      <label htmlFor="dark-mode"></label>
    </div>
  )
}
