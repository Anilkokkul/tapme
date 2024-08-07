"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const db_1 = require("./db");
const schema = (0, graphql_yoga_1.createSchema)({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
const addUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield db_1.supabase
        .from('users')
        .insert([
        { id: 'user1', coins: 100 }
    ]);
    if (error) {
        console.error('Error inserting user:', error.message);
    }
    else {
        console.log('User inserted:', data);
    }
});
addUser();
const yoga = (0, graphql_yoga_1.createYoga)({
    schema,
});
const app = (0, express_1.default)();
app.use('/graphql', yoga);
app.listen(4000, () => {
    console.info('Server is running on http://localhost:4000');
});
