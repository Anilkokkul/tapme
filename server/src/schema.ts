export const typeDefs = `
  type Query {
    getCoins(userId: String!): Int
  }
  type Mutation {
    addCoins(userId: String!, amount: Int!): Int
  }
`;