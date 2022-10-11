import React, { useState, useEffect } from "react"

const ThemeContextDefaultValue = {
  theme: "dark-mode",
  setTheme: (_theme: any) => {},
}
export const ThemeContext = React.createContext(ThemeContextDefaultValue)

interface Props {
  children?: React.ReactNode
}

const windowGlobal = typeof window !== "undefined" && window

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const fetchThemeFromLocalStorage = () => {
    try {
      return JSON.parse(windowGlobal.localStorage.getItem("theme"))
    } catch (e) {
      return ThemeContextDefaultValue.theme
    }
  }
  const [theme, setTheme] = useState(fetchThemeFromLocalStorage())

  useEffect(() => {
    if (theme) {
      windowGlobal.localStorage.setItem("theme", JSON.stringify(theme))
    } else {
      setTheme(ThemeContextDefaultValue.theme)
      windowGlobal.localStorage.setItem("theme", JSON.stringify(theme))
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
