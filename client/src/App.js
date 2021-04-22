import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import Home from './pages/home'

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
            {/*  <Route exact path="/queue" component={Queue} />
            <Route exact path="/favorites" component={Favorites} />
  <Route render={() => <h1 className="title-text main-container">This Page Does Not Exist!</h1>} />*/}
          </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}
  
export default App;