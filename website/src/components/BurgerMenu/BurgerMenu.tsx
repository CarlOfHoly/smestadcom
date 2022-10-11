import React, { useContext } from "react"
import "../../../css/components/BurgerMenu/BurgerMenu.css"
import { ThemeContext } from "../Utils/ThemeContext"

interface Props {
  click: any
  show: boolean
}

export const BurgerMenu: React.FC<Props> = ({ click, show }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div onClick={click} className={"menu-btn " + (show ? "show" : "close")}>
      <div className={"btn-line " + theme}></div>
      <div className={"btn-line " + theme}></div>
      <div className={"btn-line " + theme}></div>
    </div>
  )
}
