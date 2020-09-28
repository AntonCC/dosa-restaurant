import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import AddressBar from './components/address-bar/address-bar'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'
import Menu from './pages/menu/menu'
import PreFooter from './components/pre-footer/pre-footer'
import Footer from './components/footer/footer'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/menu', name: ' Menu', component: Menu}
]

const App = () =>  {
  return (
    <div className="App">
      <AddressBar />
      <Navbar />
      <Switch>
        {
          routes.map(({ path, name, component}) => (
            <Route key={name} exact path={path} component={component}/>
          ))
        }
      </Switch>
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
