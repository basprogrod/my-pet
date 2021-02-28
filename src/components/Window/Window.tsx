import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ModalWindow from '../ModalWindow'

import './styles.scss'

const modal: HTMLDivElement = document.createElement('div')
modal.id = 'modal'

const Window = () => {
  useEffect(() => {
    document.body.appendChild(modal)
    return () => {
      document.body.removeChild(modal)
    }
  }, [])

  return createPortal(<ModalWindow />, modal)
}

export default Window
