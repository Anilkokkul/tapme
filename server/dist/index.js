"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const schema = (0, graphql_yoga_1.createSchema)({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
const yoga = (0, graphql_yoga_1.createYoga)({
    schema,
});
const app = (0, express_1.default)();
app.use('/graphql', yoga);
app.listen(4000, () => {
    console.info('Server is running on http://localhost:4000');
});
