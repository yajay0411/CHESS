import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Retrieve the saved theme from localStorage or default to "light"
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  })

  // Apply the theme to the HTML element
  useEffect(() => {
    const root = document.documentElement // Select the <html> element
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme) // Save the theme in localStorage
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
