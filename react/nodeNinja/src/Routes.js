import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Error from './pages/Error';
import Home from './pages/Home';
import Page from './pages/Page';
import Edit from './pages/Edit';
import Tutorials from './pages/Tutorials';
import fakeAuth from './Auth';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/page' component={Page} />
      <PrivateRoute path='/edit' component={Edit} />
      <PrivateRoute path='/tutorials' component={Tutorials} />
      <Route path='/error' component={Error} />
      <Footer />
    </div>
  </Router>
);

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
);

export default Routes;
