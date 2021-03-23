import { Route, Switch } from 'react-router-dom'
import router from '../../constants/router'
import Categories from '../Categories'
import Propducts from '../Propducts'
import './styles.scss'

const Main = () => {
  return (
    <main className="admin-main">
      <div className="mainbar">
        <Switch>
          <Route path={router.CATEGORIES} component={Categories} />
          <Route path={router.PRODUCTS} component={Propducts} />
        </Switch>
      </div>
    </main>
  )
}

export default Main
