import React, { Component } from 'react';
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Navigator from './Navigator';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjfiub07z0uti0152w9dr1zuf'
  }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}

export default App;
