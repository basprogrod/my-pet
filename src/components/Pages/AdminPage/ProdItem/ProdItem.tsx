
import './styles.scss'

const ProdItem = ({tableView}: any) => {

  return (
    <div className={`product-item ${tableView ? 'table-view' : ''}`}>
      <img src="http://localhost:3001/uploads/Screenshot_1.png" alt="" className="product-item__bg"/>
      <div className="product-item__btns">
        <button className="product-item__btn">del</button>
        <button className="product-item__btn">edit</button>
      </div>
    </div>
  )
}

export default ProdItem