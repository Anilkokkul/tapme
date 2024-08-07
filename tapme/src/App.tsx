import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Game from './Components/Game';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URI
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Game/>
    </ApolloProvider>
  );
}

export default App;
