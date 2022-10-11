import React, { useState } from "react"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import Nav from "../Nav/Nav"
import ThemeToggler from "../Theme/ThemeToggler"

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const clicked = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <header>
      <ThemeToggler />
      <BurgerMenu show={!showMenu} click={clicked} />
      <Nav show={showMenu} click={clicked} />
    </header>
  )
}

export default Header
