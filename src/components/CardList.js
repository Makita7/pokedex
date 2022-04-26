import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import MoreInfo from "./MoreInfo";

export const CardList = () =>{
    const [ pokeInfo, setPokemonInfo ] = useState([]);
    const [ loading, setLoading ] = useState();
    const [ url, setUrl ] = useState('https://pokeapi.co/api/v2/pokemon');
    const [ nextUrl, setNextUrl ] = useState();
    const [ prevUrl, setPrevtUrl ] = useState();
    const [ pokedex, setPokedex ] = useState();
    //console.log(pokedex)

    const FetchData = async () => {
      //res short for response
      setLoading(true);
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevtUrl(res.data.previous);
      GetData(res.data.results);
      setLoading(false);
    }

    const GetData = async(res) =>{
      res.map ( async(item) =>{
        const result = await axios.get(item.url)
        //console.log(item.name);

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
    <div className="">
      <MoreInfo data={pokedex}/>

      <div className="cardList flexbox">
        <Card pokemon={pokeInfo} loading={loading} infoPokemon={item=>setPokedex(item)}/>
      </div>
      <div className="btnContainer center">
            <button className="btn" onClick={() =>{
                setLoading(true)
                setPokemonInfo([])
                setUrl(prevUrl)
                FetchData()
                setLoading(false);
          }}>

              Previous
          </button>
          
          <button className="btn"  onClick={() =>{
                setLoading(true)
                setPokemonInfo([])
                setUrl(nextUrl)
                FetchData()
                setLoading(false);
            }}>

                Next
          </button>

      </div>
    </div>
  );
}

