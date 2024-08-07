import { supabase } from './db';

// interface User {
//   id: string;
//   coins: number;
// }

export const resolvers = {
  Query: {
    getCoins: async (_: unknown, { userId }: { userId: string }) => {
        console.log("userId",userId)
      const { data, error } = await supabase
        .from('users')
        .select('coins')
        .eq('id', 'user2')
        .single();

     console.log('Data:', data);
console.log('Error:', error);

      if (error) {
        console.error('Error fetching coins:', error);
        throw new Error('Error fetching user data.');
      }

      return data ? data.coins : 0;
    },
  },
  Mutation: {
    addCoins: async (_: unknown, { userId, amount }: { userId: string; amount: number }) => {
      const { data, error } = await supabase
        .from('users')
        .upsert({ id: userId, coins: amount }, { onConflict: 'id' });

      if (error) {
        console.error('Error adding coins:', error.message);
        throw new Error('Error updating user data.');
      }

      return data && data.length > 0 ? data[0].coins : 0;
    },
  },
};
