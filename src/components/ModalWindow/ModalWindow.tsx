import { useEffect, useState } from 'react'
import './styles.scss'

const ModalWindow = ({
  isShow,
  handleClose,
}: any) => {

  return (
    <div className={`modal-window ${isShow ? 'active' : ''}`}>
      <div className="modal-window__header">
        <div className="modal-window__title">Заголовок</div>
        <i className="icns-cross"></i>
      </div>

      <div className="modal-window__body">
        123
      </div>

      <div className="modal-window__footer">
        <button onClick={handleClose}>1</button>
        <button>2</button>
      </div>
    </div>
  )
}

export default ModalWindow