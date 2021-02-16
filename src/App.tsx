import { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import router from './constants/router';
import Header from './components/Header';
import MainPage from './components/Pages/MainPage';
import DeliveryPage from './components/Pages/DeliveryPage';
import ContactPage from './components/Pages/ContactPage';
import FeedbackPage from './components/Pages/FeedbackPage';
import PaymentPage from './components/Pages/PaymentPage';
import CatalogPage from './components/Pages/CatalogPage';

import cartImg from './assets/svg/cart.svg'

import './styles.scss'
import Button from './components/Button';
import CartIcon from './components/Icons/CartIcon';
import SizeElement from './components/SizeElement';
import SizesRow from './components/SizesRow';
import { sizesMock } from './mocks/sizes';
import ColorElement from './components/ColorElement';
import ColorRow from './components/ColorRow';
import { colorsMock } from './mocks/colors';
import Quantiti from './components/Quantiti';
import PropductCard from './components/Pages/PropductCard';
import { ListFormat } from 'typescript';
import AdminPage from './components/Pages/AdminPage';

function App() {
  const [state, setState] = useState('asdf fadf')

  const [img, setImg] = useState<any>(undefined)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const fd = new FormData(e.target)

    console.log();
    const field = fd.entries().next().value
    const file = field[1]
    const reader = new FileReader()

    const data = new FormData()

    data.append('image', file)

    fetch('http://localhost:3001/file', {
      method: 'post',
      body: data,
    }).then((r) => r.json()).then((r) => {
      return fetch(`http://localhost:3001/uploads/${r.fileName}`)
    }).then((r) => r.blob())
      .then((r) => {
        console.log(r)
        reader.readAsDataURL(r)

        reader.onload = () => {
          setImg(reader.result)
        }
      })  
  }

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
        <Route exact path={router.PRODUCT_CARD} component={PropductCard} />
        <Route exact path="/123">
          <Quantiti quantity={2} onSelect={() => {}} onChange={(e) => {}}/>
          <ColorRow colors={colorsMock}/>
          <SizesRow sizes={sizesMock} />
          <Button
            text="kek"
            onClick={(e) => {console.log(e.target)}}
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
        <Route exact path="/file">
          <div>
            <form action="/" method="post" encType="mulipart/form-data" onSubmit={handleSubmit}>
              <input type="file" name="image" />
              <button type="submit">Отправить</button>
            </form>
            <img src={img} alt="Image"/>
          </div>
        </Route>
        <Route path={router.ADMIN} component={AdminPage} />
      </Switch>
      
    </div>
  );
}

export default App;
