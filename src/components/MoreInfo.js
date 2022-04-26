//when you select a pokemon the info is loaded otherwise there will be a text that says select pokemon

const MoreInfo = ({ data }) => {
    console.log(data);
    return (
    <div className="center moreInfo flexbox">
        {
        !data ? <h3>Select Pokemon</h3> :
        
        <div className="flexbox">
            <div className="col">
                <img src={data.sprites.front_default} alt={data.name}/>
            </div>

            <div className="padTop col">
                <h1>{data.name}</h1>
                <div className="">
                    {
                        data.types.map(pokemon => {
                            <p>Type:{pokemon.type}</p>
                        })
                    }
                    <p><strong>Abilities:</strong></p>
                        {
                            data.abilities.map(pokemon =>{
                                return(
                                    <ul className="abilities">
                                        <li>{pokemon.ability.name}</li>
                                    </ul>
                                );
                            })
                        }
                    
                        
                        <p><strong>Weight:</strong> {data.weight}</p>
                </div>
            </div>

            <div className="col statpad">
                        {
                            data.stats.map(pokemon => {
                                return(
                                    <>
                                        <p><strong>{pokemon.stat.name}</strong>: {pokemon.base_stat}</p>
                                    </>
                                );
                            })
                        }
            </div>

            <div className="col">
                <img src={data.sprites.front_shiny} alt="eevee"/>
            </div>
        </div>
        }
    </div>
  );
}

export default MoreInfo;
