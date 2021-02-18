import { Link, useLocation } from 'react-router-dom'
import router from '../../constants/router'
import logo from '../../assets/svg/logo.svg'
import Navigation from '../Navigation'
import './styles.scss'
import { useEffect, useState } from 'react'
import useScrollToggler from '../../hooks/useScrollToggler'
import { SCROLL_FOR_DISPLAYNG_FIXED_HEADER } from '../../constants/constants'
import dictionary from '../../constants/dictionary'

const Header = () => {
  const location = useLocation()
  
  const [isOpenNav, setIsOpenNav] = useState(false)
  const [isFixedHeader, setIsFixedHeader] = useState(true)
  const isDisplay: boolean = useScrollToggler(SCROLL_FOR_DISPLAYNG_FIXED_HEADER)

  useEffect(() => {
    setIsFixedHeader(!isFixedHeader)    
  }, [isDisplay])

  const handleOpneCloseNav = () => {
    setIsOpenNav((isOpenNav) => !isOpenNav)
  }

  return location.pathname.includes(router.ADMIN) ? null : (
    <header className={`header ${isDisplay ? 'active' : ''}`}>
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
      <div className={`header__bottom ${isFixedHeader ? 'active' : ''}`}>
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
            
            <div className="mob-btn" onClick={handleOpneCloseNav} >
              <div className="mob-btn__block">{dictionary.header.MENU}</div>
            </div>
            
            <Navigation isOpen={isOpenNav} />
            
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