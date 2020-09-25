import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import AddressBar from './components/address-bar/address-bar'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'

const routes = [
  {path: '/', name: 'Home', component: Home}
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
    </div>
  );
}

export default App;
