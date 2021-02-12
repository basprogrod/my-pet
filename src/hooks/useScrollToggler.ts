import { useEffect, useState } from "react";

export default (value: number): boolean => {
  const [scrollValue, setScrollValue] = useState(false)

  useEffect(() => {
    const cb = () => {
      if (window.scrollY > value) {
        setScrollValue(true)
      } else {
        setScrollValue(false)
      }
    }

    window.addEventListener('scroll', cb)

    return () => window.removeEventListener('scroll', cb)
  }, [])
  console.log("TCL ~ file: useVerticalScroll.ts ~ line 23 ~ scrollValue", scrollValue)
  return scrollValue
}
  
