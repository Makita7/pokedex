

const Card = ({ pokemon, loading, infoPokemon }) => {
  //console.log(pokemon);

  return (
    <>
        {
          loading ? <h1>Loading...</h1> : 
          pokemon.map((item) => {
            return(
                <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                    <div className="flexbox center">
                      <h3 className="id">{item.id}</h3> 
                      <h1>{item.name}</h1>
                    </div>
                    <img src={item.sprites.front_default} alt={item.name}/>
                </div>
            )
          })
        }
    </>
  );
}


export default Card;

//key={item.id}