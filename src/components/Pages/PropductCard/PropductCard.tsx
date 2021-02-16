import { colorsMock } from '../../../mocks/colors'
import { sizesMock } from '../../../mocks/sizes'
import Button from '../../Button'
import ColorRow from '../../ColorRow'
import CartIcon from '../../Icons/CartIcon'
import Quantiti from '../../Quantiti'
import SizesRow from '../../SizesRow'
import { PropductCardProps } from './IPropductCard'
import ProductForm from './ProductForm'
import './styles.scss'

const PropductCard = ({}) => {
  
  return (
    <div className="product-card">
      <div className="container product-card__container">
        <div className="container__row">
          <div className="container__cell">1</div>
          <div className="container__cell">
            <ProductForm
              title='Название товара'
              name='Имя товара'
              price={50}
              currency='BYN'
              discount={100}
              colors={colorsMock}
              sizes={sizesMock}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropductCard