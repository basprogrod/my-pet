import { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import router from './constants/router';
import Header from './components/Header';
import MainPage from './components/MainPage';
import DeliveryPage from './components/DeliveryPage';
import ContactPage from './components/ContactPage';
import FeedbackPage from './components/FeedbackPage';
import PaymentPage from './components/PaymentPage';
import CatalogPage from './components/CatalogPage';

import cartImg from './assets/svg/cart.svg'

import './styles.scss'
import Button from './components/Button';
import CartIcon from './components/Icons/CartIcon';
import SizeElement from './components/SizeElement';
import SizesRow from './components/SizesRow';
import { sizesMock } from './mocks/sizes';

function App() {
  const [state, setState] = useState('asdf fadf')


  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path={router.HOME} component={MainPage}/>
        <Route path={router.CATALOG} component={CatalogPage}/>
        <Route path={router.DELIVERY} component={DeliveryPage} />
        <Route path={router.CONTACTS} component={ContactPage} />
        <Route path={router.FEEDBACK} component={FeedbackPage} />
        <Route exact path={router.PAYMENT} component={PaymentPage} />
        <Route exact path="/123">
          <SizesRow sizes={sizesMock} />
          <Button
            text="kek"
            onClick={(e) => {}}
          />
          <Button
            icon={<CartIcon />}
            onClick={(e) => {}}
          />
          <Button
            icon={<CartIcon />}
            text="kek"
            onClick={(e) => {}}
          />
          <Button
            text="kek"
            type='black'
            onClick={(e) => {}}
          />
          <Button
            type='black'
            icon={<CartIcon />}
            onClick={(e) => {}}
          />
          <Button
            type='black'
            icon={<CartIcon />}
            text="kek"
            onClick={(e) => {}}
          />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
