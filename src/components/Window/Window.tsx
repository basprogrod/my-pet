import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import './styles.scss'

const Window = () => {

  const [isShow, setIsShow] = useState(false)

  const modal: HTMLDivElement = document.createElement('div')
  modal.id = 'modal'

  const handleShow = () => {
    setIsShow(true)
  }

  // useEffect(() => {
  //   if (isShow) {
  //     document.getElementById('modal')?.classList.add('active')
  //   } else {
  //     document.getElementById('modal')?.classList.remove('active')
  //   }
  // }, [isShow])

  useEffect(() => {    
    // setTimeout(() => {
      // handleShow()
    // }, 100)
    document.body.appendChild(modal)
    return () => {
      document.body.removeChild(modal)
    }
  }, [])
  
  // const render = (): React.ReactElement => {
  //   return (
      
  //   )
  // }
  return createPortal(<div className={`modal`}>123</div>, modal)
}

export default Window