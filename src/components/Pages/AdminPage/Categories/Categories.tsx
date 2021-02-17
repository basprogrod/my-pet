import Category from '../Category'
import './styles.scss'

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__tools">
        <button className="categories__tools-btn">
          <i className="icns-plus"></i>
          <span>Добавить категорию</span>
          </button>
      </div>
      <div className="categories__list">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  )
}

export default Categories