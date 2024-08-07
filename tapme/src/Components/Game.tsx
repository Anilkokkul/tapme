import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_COINS = gql`
  query GetCoins($userId: String!) {
    getCoins(userId: $userId)
  }
`;

const ADD_COINS = gql`
  mutation AddCoins($userId: String!, $amount: Int!) {
    addCoins(userId: $userId, amount: $amount)
  }
`;

const Game: React.FC = () => {
  const [userId, setUserId] = useState('user1'); 
  const { data, refetch } = useQuery(GET_COINS, { variables: { userId } });
  const [addCoins] = useMutation(ADD_COINS);
    console.log(data)
  const handleTap = async () => {
    await addCoins({ variables: { userId, amount: 1 } });
    refetch();
  };

  return (
    <div className='App'>
      <h1>TapMe Game</h1>
      <button onClick={handleTap}>Tap to Earn Coins!</button>
      <p>Coins: {data?.getCoins ?? 0}</p>
    </div>
  );
};

export default Game;
