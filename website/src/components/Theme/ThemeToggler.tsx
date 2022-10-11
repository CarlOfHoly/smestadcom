import React, { useContext } from "react"
import { ThemeContext } from "../Utils/ThemeContext"
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core"
import "../../../css/components/Theme/ThemeToggler.css"

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    setTheme(prevTheme => {
      return prevTheme === "dark-mode" ? "light-mode" : "dark-mode"
    })
  }
  const isDarkMode = theme === "dark-mode"

  return (
    <FormGroup className="theme-toggler">
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={changeTheme} />}
        label={isDarkMode ? "dark mode" : "light mode"}
      />
    </FormGroup>
  )
}

export default ThemeToggler
