import './styles.scss'
import { CategoryProps } from './ICategory'

const Category = ({
  name,
  id,
  handleShowWarn,
  img,
}: CategoryProps) => {

  return (
    <div className="category">
      <div className="category__title">{name}</div>
      <button className="category__btn delete" onClick={handleShowWarn}>
        <i className="icns-bin"></i>
      </button>
      <img className="category__bg" src={img} alt=""/>
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