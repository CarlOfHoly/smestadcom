import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

const Spinner: React.FC = () => {
  const blue = useRef(null)
  const red = useRef(null)
  const yellow = useRef(null)
  const green = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      [blue.current],
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    )
    gsap.fromTo(
      [red.current],
      0.6,
      { y: 18 },
      { y: -18, repeat: -1, yoyo: true }
    )
    gsap.fromTo(
      [yellow.current],
      0.7,
      { y: 18 },
      { y: -18, repeat: -1, yoyo: true }
    )
    gsap.fromTo(
      [green.current],
      0.8,
      { y: 18 },
      { y: -18, repeat: -1, yoyo: true }
    )
  }, [])

  return (
    <svg viewBox="0 0 150 33.2" width="180" height="150">
      <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#5e81ac" />
      <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#bf616a" />
      <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#ebcb8b" />
      <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#a3be8c" />
    </svg>
  )
}

export default Spinner
