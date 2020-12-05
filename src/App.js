import React from 'react'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Menu from './component/Menu';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact'
import Login from './component/Login'
import Signup from './component/Signup';
import './styles/tailwind.css'
import Head from './component/Head';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
        <Head/>
      <Menu/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App