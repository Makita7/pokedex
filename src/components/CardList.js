import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

export const CardList = () =>{
    const [ pokeInfo, setPokemonInfo ] = useState([]);
    const [ loading, setLoading ] = useState();
    const [ url, setUrl ] = useState('https://pokeapi.co/api/v2/pokemon');

    const FetchData = async () => {
      //res short for response
      setLoading(true);
      const res = await axios.get(url);
      getData(res.data.results);
      setLoading(false);
    }

    const getData = async(res) =>{
      res.map ( async(item) =>{
        const result = await axios.get(item.url)

        setPokemonInfo(state =>{
            state = [...state, result.data]
            state.sort(( a, b ) => a.id > b.id ? 1 : -1)
            return state;
        })
      })
    }

    useEffect(() => {
      FetchData();
    }, []);

  return(
    <>
      <Card pokemon={pokeInfo} loading={loading}/>
    </>
  );
}

