import React, { useEffect } from "react"
import Canvas from "./Canvas"
import { range } from "../../../utils"
import useWindowsSize from "../../CustomHooks/useWindowSize"

const Tron = () => {
  const [width, height] = useWindowsSize()

  useEffect(() => {
    addEventListener("mousemove", e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    addEventListener("resize", () => {
      init()
    })
  }, [])

  const mouse = {
    x: width / 2,
    y: height / 2,
  }

  class Particle {
    x: any
    y: any
    radius: any
    colour: any
    velocity: any
    ttl: number
    constructor(x, y, radius, colour, velocity) {
      this.x = x
      this.y = y
      this.radius = radius
      this.colour = colour
      this.velocity = velocity
      this.ttl = 1000
    }

    draw(c) {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = this.colour
      c.fill()
      c.closePath()
    }

    update(c) {
      this.draw(c)
      this.x += this.velocity.x
      this.y += this.velocity.y
      this.ttl--
    }
  }

  let particles
  particles = []
  const amount = 30
  const init = () => {
    generateRing()
  }

  let hue = 0
  let hueRadians = 0
  const generateRing = () => {
    hue = Math.sin(hueRadians)

    for (let i in range(0, amount)) {
      const radian = (Math.PI * 2) / amount
      const x = mouse.x
      const y = mouse.y
      particles.push(
        new Particle(x, y, 5, `hsl(${Math.abs(hue * 360)}, 50%, 50%)`, {
          x: Math.cos(radian * +i),
          y: Math.sin(radian * +i),
        })
      )
    }
    hueRadians += 0.01
  }
  const continousRing = () => {
    setTimeout(continousRing, 200)
    generateRing()
  }

  const draw = c => {
    c.fillStyle = "rgba(0, 0, 0, 0.05)"
    c.fillRect(0, 0, width, height)
    particles.forEach((particle, i) => {
      if (particle.ttl < 0) {
        particles.splice(i, 1)
      } else {
        particle.update(c)
      }
    })
  }

  continousRing()
  init()
  return (
    <>
      <Canvas draw={draw} className="blobs" style={{ position: "absolute" }} />
    </>
  )
}

export default Tron
