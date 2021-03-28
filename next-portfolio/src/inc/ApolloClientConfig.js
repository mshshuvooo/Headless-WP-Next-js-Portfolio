import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: 'http://portfolio.local/graphql',
  cache: new InMemoryCache()
});