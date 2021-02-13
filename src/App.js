import Header from './components/Header'
import Launches from './components/Launches'
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useState, useEffect } from 'react';
import { Pagination } from './components/Pagination';

// create apollo client
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

function App() {

  // initialize stateful logic
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [launches, setLaunches] = useState([])
  const [launchPerPage] = useState(5);

  // make a api call

  useEffect(() => {

    setLoading(true)

    client.query({
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
    `}).then(async results => {
        await setLaunches(results.data.launches)
        setLoading(false)
      });

  }, [])

  // get current launch
  const lastLaunchIndex = currentPage * launchPerPage
  const firstLaunchIndex = lastLaunchIndex - launchPerPage
  const currentLaunch = launches.slice(firstLaunchIndex, lastLaunchIndex)

  // make a paginate function
  const paginate = (num) => {
    setCurrentPage(num)
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Pagination launchPerPage={launchPerPage} totalLaunches={launches.length} paginate={paginate} />
          <Launches launches={currentLaunch} loading={loading} />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
