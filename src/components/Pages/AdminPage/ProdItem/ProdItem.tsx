import { useDispatch } from 'react-redux'
import image from '../../../../assets/img/product-img.jpg'
import { ProdItemProps } from './IProdItem'

import './styles.scss'

const ProdItem = ({
  tableView,
  name,
  price,
  brand,
  desctiption,
  img,
  category,
}: ProdItemProps) => {

  const disp = useDispatch()

  const handleClick = () => {    
    // disp({type: 'KEK', lol: 'Chel]k'})
  }

  return (
    <div className={`product-item ${tableView ? 'table-view' : ''}`} onClick={handleClick}>
      <div className="product-item__title">
        {name}
      </div>
      <img src={img} alt="" className="product-item__bg"/>
      <div className="product-item__footer">
        <div className="product-item__info">
          <div className="product-item__price">
            {price}
          </div>
          <div className="product-item__name">
            {brand}
          </div>
        </div>
        <div className="product-item__btns">
          <button className="product-item__btn">
            <i className="icns-bin" />
          </button>
          <button className="product-item__btn">
            <i className="icns-pencil"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProdItem