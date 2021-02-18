import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ModalWindow from '../ModalWindow'

import './styles.scss'

const modal: HTMLDivElement = document.createElement('div')
modal.id = 'modal'

const Window = ({
  closeWindow,
}: any) => {
  const [state, setState] = useState(false)

  const handleClose = () => {
    setState(false)
    setTimeout(() => closeWindow(), 300)
  }

  useEffect(() => {
    setTimeout(() => {setState(true)}, 300)

    document.body.appendChild(modal)

    return () => {
      document.body.removeChild(modal)
    }
  }, [])
  
  return createPortal(<ModalWindow isShow={state} handleClose={handleClose} />, modal)
}

export default Window