import { colorsMock } from '../../../mocks/colors'
import { sizesMock } from '../../../mocks/sizes'
import Button from '../../Button'
import ColorRow from '../../ColorRow'
import CartIcon from '../../Icons/CartIcon'
import Quantiti from '../../Quantiti'
import SizesRow from '../../SizesRow'
import { PropductCardProps } from './IPropductCard'
import './styles.scss'

const PropductCard = ({
  title = 'Название товара',
  name = 'Имя',
  price = 50,
  currency = 'BYN',
  discount = 100,
  colors = colorsMock,
  sizes = sizesMock,
  description = ""
}: PropductCardProps) => {
  const handleSelectQuantity = () => {

  }

  const handleChangeQuantity = () => {

  }

  const handleButtonCartClick = () => {
    
  }

  const handleButtonAskClick = () => {

  }


  return (
    <div className="product-card">
      <div className="container product-card__container">
        <div className="container__row">
          <div className="container__cell">1</div>
          <div className="container__cell b">
            <div className="product-card__name">{name}</div>
            <div className="product-card__title">{title}</div>
            
            <div className="product-card__costs">
              <div>
                <span className="product-card__price">{price}</span>
                <span className="product-card__currency">{currency}</span>
              </div>
              <div className="product-card__discount">
                <span className="product-card__price"><s>{discount}</s></span>
                <span className="product-card__currency"><s>{currency}</s></span>
              </div>
            </div>

            <ColorRow colors={colors} />
            <SizesRow sizes={sizes} />
            <Quantiti 
              quantity={1}
              onSelect={handleSelectQuantity} 
              onChange={handleChangeQuantity}
            />

            <div className="product-card__button-set">
              <Button 
                onClick={handleButtonCartClick}
                icon={<CartIcon />}
                text="в конрзину"
              />
              <Button 
                onClick={handleButtonAskClick}
                type="black"
                text="задать вопрос"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropductCard