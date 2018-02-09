import React, { Component } from 'react';
import './App.css';
import AntsContainer from './components/AntsContainer.js';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import gql from 'graphql-tag';
import { ApolloProvider, graphql } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://antserver-blocjgjbpw.now.sh/graphql' }),
  cache: new InMemoryCache()
});

const antsContainerQuery = gql`
   query antsContainerQuery {
     ants {
       name
       length
       color
       weight
     }
   }
 `;

const AntsContainerWithData = graphql(antsContainerQuery)(AntsContainer);

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">ANT RACING</h1>
          </header>
          <AntsContainerWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
