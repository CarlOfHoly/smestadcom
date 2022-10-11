import React, { useEffect } from "react"
import { introduceBurgerMenu } from "./Utils/Animations"

const CV = () => {
  useEffect(() => {
    introduceBurgerMenu()
  }, [])

  return <>About</>
}

export default CV
