import React, { useContext } from "react"
import BlobEntity from "./BlobEntity"
import Canvas from "./Canvas"
import Overlay from "../Overlay"
import { range, getRandomInt, getRandom } from "../../../utils"
import { ThemeContext } from "../../Utils/ThemeContext"

const Blobs = () => {
  const { theme } = useContext(ThemeContext)

  const aurora1 = "#bf616a"
  const aurora2 = "#d08770"
  const aurora3 = "#ebcb8b"
  const snow3 = "#eceff4"
  const frost1 = "#8fbcbb"

  const circles = []
  const colours = [aurora1, aurora2, aurora3, snow3, frost1]
  const amount = 60
  const velocity = 0.2
  const windowGlobal = typeof window !== "undefined" && window

  for (let _i of range(0, amount)) {
    const radius = getRandomInt(2, 3)
    const x = getRandom(radius, windowGlobal.innerWidth - radius)
    const y = getRandom(radius, windowGlobal.innerHeight - radius)
    const dx = getRandom(-velocity, velocity)
    const dy = getRandom(-velocity, velocity)
    const colour = colours[getRandomInt(0, colours.length)]

    circles.push(new BlobEntity(x, dx, y, dy, radius, colour))
  }

  const draw = c => {
    c.clearRect(0, 0, windowGlobal.innerWidth, windowGlobal.innerHeight)
    circles.forEach(circle => circle.update(c))
  }

  return (
    <>
      <Canvas draw={draw} className="blobs" style={{ position: "absolute" }} />
      {theme === "dark-mode" && <Overlay />}
    </>
  )
}

export default Blobs
