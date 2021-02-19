import { useContext } from "react";
import { IModalContext } from "../../../context/ModalWindowContext/IModalContext";
import ModalWindowContext from "../../../context/ModalWindowContext/ModalWindowContext";

const WarningModal = ({
  handleClose,
}: any) => {

  const { deletingCat } = useContext<IModalContext>(ModalWindowContext)

  const handleDelete = () => {
    // handleDel(deletingCat)
    console.log('Delete', deletingCat);
  }

  return <div className="modal-window__popup product-popup">
    <div className="modal-window__header">
      <div className="modal-window__title">Удаление</div>
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