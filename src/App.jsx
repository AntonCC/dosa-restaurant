import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import ScrollTop from './components/scroll-top/scroll-top'
import AddressBar from './components/address-bar/address-bar'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import ModalContainer from './components/modal-container/modal-container'
import ModalBackdrop from './components/modal-backdrop/modal-backdrop'
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
  const [openModal, setOpenModal] = useState(false)
  const [showFixedNav, setFixedNav] = useState(false)
  const [hideNav, setHideNav] = useState(false)
  let navRef = useRef(null)

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  // dont forget to debounce this
  const handleScroll = () => {
    let navBottom = navRef.current.getBoundingClientRect().bottom
    if(navBottom < 0) {
      setFixedNav(true)
    } else {
      setFixedNav(false)
    }
  }

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="App">
      { openModal ? <ModalBackdrop /> : '' }
      { openModal ? <ModalContainer /> : '' }
      <ScrollTop />
      <AddressBar />
      <Navbar key='1' ref={navRef} handleSidebar={handleSidebar} />
      <Navbar key='2' handleSidebar={handleSidebar} showFixedNav={showFixedNav} fixed />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar}/>
      <Switch>
        {
          routes.map(({ path, name, component}) => (
            <Route key={name} exact path={path} component={component}/>
          ))
        }
      </Switch>
      <PreFooter />
      <Footer handleModal={handleModal}/>
    </div>
  );
}

export default App;
