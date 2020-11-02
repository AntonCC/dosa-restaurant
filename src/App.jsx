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

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

const App = () =>  {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [showFixedNav, setFixedNav] = useState(false)
  let navRef = useRef(null)

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  const handleScroll = () => {
    let navBottom = navRef.current.getBoundingClientRect().bottom
    if(navBottom < 0) {
      setFixedNav(true)
    } else {
      setFixedNav(false)
    }
  }

  const handleModal = modalType => {
    if(!openModal) {
      setOpenModal(true)
      setModalType(modalType)
    } else {
      setOpenModal(false)
      setModalType(null)
    }
  }

  const throttledScroll = throttle(handleScroll, 40)

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll)

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  const routes = [
    {path: '/', name: 'Home', component: <Home handleModal={handleModal}/>},
    {path: '/about', name: 'About', component: <About />},
    {path: '/menu', name: ' Menu', component: <Menu />},
    {path: '/location', name: 'location', component: <Location />}
  ]
  
  return (
    <div className={`App ${openModal ? 'stop-scroll' : ''}`}>
      { openModal ? <ModalBackdrop /> : '' }
      { openModal ? <ModalContainer modalType={modalType} handleModal={handleModal}/> : '' }
      <ScrollTop />
      <AddressBar />
      <Navbar key='1' ref={navRef} handleSidebar={handleSidebar} />
      <Navbar key='2' handleSidebar={handleSidebar} showFixedNav={showFixedNav} fixed />
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar}/>
      <Switch>
        {
          routes.map(({ path, name, component}) => (
            <Route key={name} exact path={path} render={props => component}/>
          ))
        }
      </Switch>
      <PreFooter />
      <Footer handleModal={handleModal}/>
    </div>
  );
}

export default App;
