import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import AddressBar from './components/address-bar/address-bar'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Home from './pages/home/home'
import About from './pages/about/about'
import Menu from './pages/menu/menu'
import Location from './pages/location/location'
import PreFooter from './components/pre-footer/pre-footer'
import Footer from './components/footer/footer'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/menu', name: ' Menu', component: Menu},
  {path: '/location', name: 'location', component: Location}
]

const App = () =>  {
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className="App">
      <AddressBar />
      <Navbar handleSidebar={handleSidebar} />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar}/>
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
