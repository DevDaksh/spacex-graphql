import Header from './components/Header'
import Launches from './components/Launches'
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useState, useEffect } from 'react';

// create apollo client
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

function App() {

  const [launches, setLaunches] = useState([])

  // make a api call

  useEffect(() => {
    client
      .query({
        query: gql`
    {
      launches {
        launch_year
        mission_name
        rocket {
          rocket_name
        }
      }
    }
    
    `
      })
      .then(result => setLaunches(la => la = result.data.launches));

  }, [])

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Launches launches={launches} />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
