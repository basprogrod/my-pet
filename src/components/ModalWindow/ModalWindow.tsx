import { useContext, useEffect, useState } from 'react'
import { IModalContext } from '../../context/ModalWindowContext/IModalContext'
import ModalWindowContext from '../../context/ModalWindowContext/ModalWindowContext'
import { ModalsData } from './IModalWindow'
import ProductAddModal from './ProductAddModal'
import './styles.scss'

const ModalWindow = () => {
  const { handleCloseWindow, modalData } = useContext<IModalContext>(ModalWindowContext)
  const { Comp, title } = modalData as ModalsData
  
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsShow(true), 100)
  }, [])

  const handleClose = () => {
    setIsShow(false)
    handleCloseWindow()
  }


  const handleCloseByOutside = (e: React.MouseEvent) => {
    const el = e.target as HTMLDivElement
  
    if (el.id === 'outside') handleClose()
  }

  return (
    <div 
      id="outside" 
      className={`modal-window ${isShow ? 'active' : ''}`} 
      onClick={handleCloseByOutside}
    >
      <Comp handleClose={handleClose} title={title} />
    </div>
  )
}

export default ModalWindow