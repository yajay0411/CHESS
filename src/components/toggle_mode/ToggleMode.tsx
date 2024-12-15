import { useTheme } from '../../context/Theme'

const ToggleMode = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="btn">
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </>
  )
}

export default ToggleMode
