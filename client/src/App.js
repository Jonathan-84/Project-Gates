import React from 'react';
import 'bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import Home from './pages/home'
import fromNow from './pages/fromNow';
//import Systac from './pages/Systac';
//import Implementation from '../components/Implementation';
import Future from './pages/Future';

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
          <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/fromNow" component={fromNow} />
            <Route exact path="/Future" component={Future} />
      
        
  <Route render={() => <h1 className="title-text main-container">This Page Does Not Exist!</h1>} />
          </Switch>
          <Footer />
      </>
    </Router>
    </ApolloProvider>
  );
}
  
export default App;