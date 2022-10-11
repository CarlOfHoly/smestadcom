import React from "react"
import { Link } from "gatsby"
import "../../../css/components/Nav/Nav.css"

interface Props {
  show: boolean
  click
}

const Nav: React.FC<Props> = ({ show, click }) => {
  const showItem = show ? "show" : "close"

  return (
    <nav className={"menu " + showItem}>
      <ul className={"menu-nav " + showItem}>
        <li className={"nav-item  " + showItem}>
          <Link
            className={"nav-link "}
            to={"/"}
            activeClassName="current"
            onClick={click}
          >
            Home
          </Link>
        </li>

        <li className={"nav-item  " + showItem}>
          <Link
            className={"nav-link "}
            to={"/about"}
            activeClassName="current"
            onClick={click}
          >
            About
          </Link>
        </li>
        <li className={"nav-item " + showItem}>
          <Link
            className={"nav-link "}
            to={"/projects"}
            activeClassName="current"
            onClick={click}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
