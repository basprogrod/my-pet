import { useEffect, useState } from 'react'
import ProductAddModal from './ProductAddModal'
import './styles.scss'

const ModalWindow = ({
  isShow,
  handleClose,
  render,
}: any) => {

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
      {render()}
    </div>
  )
}

export default ModalWindow