import Category from '../Category'
import './styles.scss'

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__tools">
        <button>Добавить категорию</button>
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