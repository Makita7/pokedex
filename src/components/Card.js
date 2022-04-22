import axios from "axios";
import { useEffect, useState } from "react";


function Card () {
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    
    const FetchApi = async () => {
      const res = await axios.get(url);
      //console.log(res.data.results);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
    }
    
    const getPokemon = async(res) =>{
      res.map( async(item) =>{
        //console.log(item);
        const result = await axios.get(item.url)
        console.log(result.data);

        setPokeData(state =>{
          state = [...state,result.data]
          return state;
        })
      })

    }

    useEffect (() => {
      FetchApi();
    }, []);

  return (
    <div>
        <h3>Pokemon:</h3><p>{item.name}</p>
    </div>
  );
}


export default Card;