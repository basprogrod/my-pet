import { Link } from 'react-router-dom'
import router from '../../constants/router'
import logo from '../../assets/svg/logo.svg'
import Navigation from '../Navigation'

import './styles.scss'

const Header = () => {
  return (
    <header className="header">
        <div className="header__top">
          <div className="container header__container">
            <div className="row header__row top">
              <a href="#" className="header__row-title">Название магазина</a>
              <div className="header__row-wrp">
                <a href="mail:#" className="header__link"><span className="icon-mail"></span><span>Email</span></a>
                <a href="tel:#" className="header__link"><span className="icon-phone"></span><span>Phone</span></a>
              </div>
              <div className="header__row-soc">
                <a href="#" className="icon-vk"></a>
                <a href="#" className="icon-insta"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container header__container">
            <div className="row header__row bottom">
              
              <Link to={router.HOME} className="header__logo site__logo">
                <div className="site__logo-img header__logo-img">
                  <img src={logo} alt="image" />
                  
                  <div className="site__logo-block header__logo-block">
                    
                  </div>
                </div>
              </Link>
              <div className="header__search">
                <div className="header__search-btn icon-search"></div>
              </div>
              
              <div className="mob-btn">
                <div className="mob-btn__block">меню</div>
              </div>
              
              <Navigation />
              
              
              <a href="cart-page.php" className="header__cart active" data-numb="9">
                <span className="icon-cart"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header