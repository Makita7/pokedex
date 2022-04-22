import { useEffect, useState } from "react";


function FetchApi() {
    const API_LINK = 'https://pokeapi.co/api/v2/pokemon';
    const [pokemon, setPokemon] = useState();
    
    const FetchApi = async () => {
      const response = await fetch(API_LINK)
      console.log(response.status);
      const data = await response.json()
      setPokemon(data)
    }
    
    useEffect (() => {
      FetchApi()
      .then(data => console.log(data))
      .catch(err => console.log(err))
    }, []);

  return (
    <div>

    </div>
  );
}

export default Card;