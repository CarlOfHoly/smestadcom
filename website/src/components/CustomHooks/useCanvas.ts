import { useRef, useEffect } from "react"

const useCanvas = draw => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const c = canvas.getContext("2d")
    let animationFrameId

    const animate = () => {
      draw(c)
      animationFrameId = window.requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

export default useCanvas
