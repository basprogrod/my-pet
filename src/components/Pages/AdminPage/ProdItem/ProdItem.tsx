import image from '../../../../assets/img/product-img.jpg'
import './styles.scss'

const ProdItem = ({tableView}: any) => {

  return (
    <div className={`product-item ${tableView ? 'table-view' : ''}`}>
      <div className="product-item__title">
        Название товара
      </div>
      <img src={image} alt="" className="product-item__bg"/>
      <div className="product-item__footer">
        <div className="product-item__info">
          <div className="product-item__price">
            50 BYN
          </div>
          <div className="product-item__name">
            Бренд
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