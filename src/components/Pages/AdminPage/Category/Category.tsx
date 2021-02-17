import './styles.scss'

import image from '../../../../assets/img/2-img.jpg'

const Category = () => {
  return (
    <div className="category">
      <div className="category__title">Название</div>
      <button className="category__btn delete">
        <i className="icns-bin"></i>
      </button>
      <img className="category__bg" src={image} alt=""/>
      <div className="category__btns">
        <button className="category__btn">Продукты</button>
        <button className="category__btn">
          <i className="icns-pencil" />
          <span>Редактировать</span>
        </button>
      </div>
    </div>
  )
}

export default Category