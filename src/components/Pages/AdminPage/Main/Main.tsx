import { Route, Switch } from 'react-router-dom'
import router from '../../../../constants/router'
import Categories from '../Categories'
import Category from '../Category'
import Propducts from '../Propducts'
import './styles.scss'

const Main = () => {
  return (
    <div className="mainbar b">
      <Switch>
        <Route path={router.CATEGORIES} component={Categories} />
        <Route path={router.PRODUCTS} component={Propducts} />
      </Switch>
      
    </div>
  )
}

export default Main