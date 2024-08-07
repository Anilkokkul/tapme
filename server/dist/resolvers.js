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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("./db");
exports.resolvers = {
    Query: {
        getCoins: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { userId }) {
            const { data, error } = yield db_1.supabase
                .from('users')
                .select('coins')
                .eq('id', userId);
            if (error) {
                console.error('Error fetching coins:', error);
                throw new Error('Error fetching user data.');
            }
            return data ? data.coins : 0;
        }),
    },
    Mutation: {
        addCoins: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { userId, amount }) {
            if (amount <= 0) {
                throw new Error('Invalid amount. Must be a positive number.');
            }
            const { data, error } = yield db_1.supabase
                .from('users')
                .upsert({ id: userId, coins: amount }, { onConflict: 'id' });
            if (error) {
                console.error('Error adding coins:', error.message);
                throw new Error('Error updating user data.');
            }
            return data && data.length > 0 ? data[0].coins : 0;
        }),
    },
};
