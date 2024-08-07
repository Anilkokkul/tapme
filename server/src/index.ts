import express from 'express';
import { createSchema, createYoga } from 'graphql-yoga';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { supabase } from './db';
const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
});

const app = express();

app.use('/graphql', yoga);

app.listen(4000, () => {
  console.info('Server is running on http://localhost:4000');
});
