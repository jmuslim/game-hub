import React, { useEffect, useState } from 'react'
import apiClient from '../Services/api-client';

interface Game{
    id: number;
    name:string;
}

interface FetchGamesResponse{
    count:number;
    results:Game[]
}

export const GameGrid = () => {
   const [games, setGames]= useState<Game[]>([]);
   const [error, setError]=useState('');

   useEffect(()=>{
    apiClient
    .get<FetchGamesResponse>('/xgames')
    .then(res => setGames(res.data.results))
    .catch(err => setError(err.message));
   })

  return (
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}


export default GameGrid