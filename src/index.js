import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'

//components
import Login from './login/Login'
import Signup from './signup/Signup'
import Dashboard from './dashboard/Dashboard'

const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp({
  // FIRE!!!
})

const routing = (
  <Router>
    <div id="routing-container">
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
