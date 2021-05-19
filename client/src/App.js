import React from 'react';
import 'bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Core/Navbar';
import Footer from './components/Core/Footer';
import Login from './components/Core/LoginForm';
import Signup from './components/Core/SignupForm';
import Home from './pages/home'
import fromNow from './pages/fromNow';
import Welcome from './pages/Welcome';
//import Systac from './pages/Systac';
//import Implementation from '../components/Implementation';
import Future from './pages/Future';
import Auth from './utils/auth';

import ProtectedRoute from './components/Core/ProtectedRoute'


import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

const App = () => {

  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/Welcome" component={Welcome} auth={Auth.loggedIn()} />
            <ProtectedRoute exact path="/fromNow" component={fromNow} auth={Auth.loggedIn()} />
            <ProtectedRoute exact path="/Future" component={Future} auth={Auth.loggedIn()} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
 
      
        
  <Route render={() => <h1 className="title-text main-container">This Page Does Not Exist!</h1>} />
          </Switch>
          <Footer />
      </>
    </Router>
    </ApolloProvider>
  );
}
  
export default App;