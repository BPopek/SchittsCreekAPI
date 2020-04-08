import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Quiz from './Components/Quiz'
import CharacterProfiles from './Components/CharacterProfiles'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/quiz' component={Quiz} ></Route>
        <Route path='/characters' component={CharacterProfiles} ></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
