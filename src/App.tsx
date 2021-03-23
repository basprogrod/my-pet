import { Route, Switch } from 'react-router-dom'
import router from './constants/router'
import AdminPage from './components/Pages/AdminPage'
import ModalContext from './context/ModalWindowContext/ModalContext'

import './styles.scss'

function App() {
  return (
    <ModalContext>
      <div className="App">
        <Switch>
          <Route path={router.ADMIN} component={AdminPage} />
        </Switch>
      </div>
    </ModalContext>
  )
}

export default App
