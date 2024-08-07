"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `
  type Query {
    getCoins(userId: String!): Int
  }
  type Mutation {
    addCoins(userId: String!, amount: Int!): Int
  }
`;
