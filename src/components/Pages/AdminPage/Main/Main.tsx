import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import router from '../../../../constants/router'
import Categories from '../Categories'
import Propducts from '../Propducts'
import { InitStateType } from '../../../../store/reducers/netReducer'
import './styles.scss'

const Main = () => {
  return (
    <div className="mainbar">
      <Switch>
        <Route path={router.CATEGORIES} component={Categories} />
        <Route path={router.PRODUCTS} component={Propducts} />
      </Switch>
      
    </div>
  )
}

export default Main