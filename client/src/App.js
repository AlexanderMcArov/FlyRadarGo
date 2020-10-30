import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Home from "./components/Home";
import Airlist from './airlines/AirLinesList'
import MyEarth from './components/MyEarth'
import Auth from './register/Auth'
import './styles/App.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="Header">
          <div className="Header__body">
            <Link to="/"><Button color="primary" variant="contained">Home</Button></Link>
            <Link to="/map"><Button color="primary" variant="contained">Map</Button></Link>
            <Link to="/calculator"><Button color="primary" variant="contained">Calculator</Button></Link>
            <Link to="/booking"><Button color="primary" variant="contained">To book</Button></Link>
            <Link to="/auth"><Button color="primary" variant="contained">Sign in</Button></Link>
            <Link to="/airlist"><Button color="primary" variant="contained">Airlist</Button></Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/map">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/">
            <MyEarth />
          </Route>
          <Route exact path="/airlist">
            <Airlist />
          </Route>
          <Route exact path="/calculator" component={() => {
            window.location.replace('/mini-earth')
            return null
          }}>
          </Route>
          <Route exact path="/booking" component={() => {
            window.location.replace('/booking')
            return null
          }}>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;