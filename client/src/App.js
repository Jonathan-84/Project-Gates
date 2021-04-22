import React from 'react';
//import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

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
  {/*     <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route component={SearchBooks} />
  </Switch>*/}
      </>
    </Router>
    </ApolloProvider>
  );
}
  
export default App;