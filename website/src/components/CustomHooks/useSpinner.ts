import { useEffect, useState } from "react"

const useSpinner = (
  spinner: React.ReactElement,
  component: React.ReactElement,
  timeout: number
) => {
  const [currentComponent, setCurrentComponent] = useState(null)

  useEffect(() => {
    setTimeout(() => setCurrentComponent(component), timeout)
  }, [])
  return currentComponent ? component : spinner
}

export default useSpinner
