import React, { Component } from 'react';
import './App.css';
import AntsList from './components/AntsList.js';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import gql from 'graphql-tag';
import { ApolloProvider, graphql } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://antserver-blocjgjbpw.now.sh/graphql' }),
  cache: new InMemoryCache()
});

const antsListQuery = gql`
   query antsListQuery {
     ants {
       name
       length
       color
       weight
     }
   }
 `;

const AntsListWithData = graphql(antsListQuery)(AntsList);

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">ANT RACING</h1>
          </header>
          <AntsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
