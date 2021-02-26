import { useSelector, useDispatch } from 'react-redux'
import useModalContext from "../../../hooks/useModalContext";
import actionTypes from '../../../store/actions/actionTypes';
import { WarningModalProps } from "./IWarningModal";

const WarningModal = ({
  handleClose,
  title,
}: WarningModalProps) => {

  const { deletingRecord } = useModalContext()

  const store = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleDelete = () => {
    handleClose()
    dispatch({type: actionTypes.net.DELETE_A_RECORD, id: deletingRecord})
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