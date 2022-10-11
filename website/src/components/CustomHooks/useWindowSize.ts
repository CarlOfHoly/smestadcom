import { useLayoutEffect, useState } from "react"

const useWindowSize = () => {
  const windowGlobal = typeof window !== "undefined" && window
  const [size, setSize] = useState([
    windowGlobal.innerWidth,
    windowGlobal.innerHeight,
  ])

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([windowGlobal.innerWidth, windowGlobal.innerHeight])
    }

    windowGlobal.addEventListener("resize", updateSize)

    return () => {
      windowGlobal.removeEventListener("resize", updateSize)
    }
  }, [])

  return size
}

export default useWindowSize
