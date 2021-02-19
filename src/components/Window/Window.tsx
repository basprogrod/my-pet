import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IModalContext } from '../../context/ModalWindowContext/IModalContext'
import ModalWindowContext from '../../context/ModalWindowContext/ModalWindowContext'
import ModalWindow from '../ModalWindow'

import './styles.scss'

const modal: HTMLDivElement = document.createElement('div')
modal.id = 'modal'

const Window = () => {
  const { handleCloseWindow, ModalComponent } = useContext<IModalContext>(ModalWindowContext)
  const [state, setState] = useState(false)

  const handleClose = () => {
    setState(false)

    setTimeout(() => handleCloseWindow(), 300)
  }

  useEffect(() => {
    setTimeout(() => {setState(true)}, 300)

    document.body.appendChild(modal)

    return () => {
      document.body.removeChild(modal)
    }
  }, [])

  if (!ModalComponent) return null
  
  return createPortal(
    <ModalWindow 
      isShow={state} 
      handleClose={handleClose} 
      render={() => <ModalComponent handleClose={handleClose} />}
    />, 
    modal
  )
}

export default Window