import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInAndSignUpPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;