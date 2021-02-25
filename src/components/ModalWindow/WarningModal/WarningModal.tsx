import { useContext } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { IModalContext } from "../../../context/ModalWindowContext/IModalContext";
import ModalWindowContext from "../../../context/ModalWindowContext/ModalWindowContext";
import actionTypes from "../../../store/actions/actionTypes";
import axios from 'axios'
import { WarningModalProps } from "./IWarningModal";
import { SERVER_URL } from "../../../constants/constants";

const WarningModal = ({
  handleClose,
  title,
}: WarningModalProps) => {

  const { deletingCat } = useContext<IModalContext>(ModalWindowContext)

  const store = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleDelete = () => {
    handleClose()
    axios.delete(`${SERVER_URL}/deleteCategory/${deletingCat}`)
  }

  return <div className="modal-window__popup product-popup">
    <div className="modal-window__header">
      <div className="modal-window__title">{title}</div>
      <i className="icns-cross" onClick={handleClose}></i>
    </div>
    <div className="modal-window__body">
      <p>Вы уверены что хотите удалить?</p>
    </div>
    <div className="modal-window__footer">
      <button onClick={handleDelete}>Удалить</button>
    </div>
  </div>
}

export default WarningModal