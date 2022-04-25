

const Card = ({pokemon, loading}) => {
  //console.log(pokemon);

  return (
    <>
        {
          loading ? <h1>Loading...</h1> : 
          pokemon.map((item) => {
            return(
                <div key={item.id}>
                  <h1>{item.id}</h1>
                  <h1>{item.name}</h1>
                  <img src={item.sprites.front_default} alt={item.name}/>
                </div>
            )
          })
        }
    </>
  );
}


export default Card;