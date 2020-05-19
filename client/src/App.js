import React, { useContext } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {QuoteContext} from './Components/QuoteProvider';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import CharacterProfiles from './Components/CharacterProfiles';
import Footer from './Components/Footer';
import legal from './Components/legal';
import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import SCadmin from './Components/adminComponents/SCadmin';

import './StylesFolder/GlobalStyles.scss';
import './StylesFolder/NavHomeFooterStyles.scss';
import './StylesFolder/CharacterStyles.scss';
import './StylesFolder/QuizStyles.scss';
import './StylesFolder/ModalStyles.scss';
import './StylesFolder/Login-Admin.scss';

function App() {

  const { token } = useContext(QuoteContext)

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/login' render={() => token ? <Redirect to='/scadmin' /> : <Login /> } />
        <Route path='/quiz' component={Quiz} ></Route>
        <Route path='/characters' component={CharacterProfiles} ></Route>
        <Route path='/legal-disclaimer' component={legal} ></Route>
        <ProtectedRoute path='/scadmin' component={SCadmin}></ProtectedRoute>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
