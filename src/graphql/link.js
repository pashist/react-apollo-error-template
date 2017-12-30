import { HttpLink } from 'apollo-link-http';

export const link = new HttpLink({
  uri: 'https://www.graphqlhub.com/graphql',
});
