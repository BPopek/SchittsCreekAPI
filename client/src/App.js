import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import CharacterProfiles from './Components/CharacterProfiles';
import Footer from './Components/Footer';
import legal from './Components/legal';
import login from './auth/Login';
import SCadmin from './Components/SCadmin';

import './StylesFolder/GlobalStyles.scss';
import './StylesFolder/NavHomeFooterStyles.scss';
import './StylesFolder/CharacterStyles.scss';
import './StylesFolder/QuizStyles.scss';
import './StylesFolder/ModalStyles.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/login' render={() => token ? <Redirect to='scadmin' /> : <Login /> } />
        <ProtectedRoute path='/scAdmin' component={SCadmin}></ProtectedRoute>
        <Route path='/quiz' component={Quiz} ></Route>
        <Route path='/characters' component={CharacterProfiles} ></Route>
        <Route path='/legal-disclaimer' component={legal} ></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
