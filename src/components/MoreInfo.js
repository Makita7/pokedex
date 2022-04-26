

function MoreInfo() {
  return (
    <div className="center moreInfo flexbox">
        <div className="col">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" alt="eevee"/>
        </div>
        <div className="padTop col">
            <h1>Eevee</h1>
            <div className="">
                <p>Type:</p>
                <p>HP:</p>
                <p>Ability:</p>
                    <ul className="abilities">
                        <li>Ability One</li>
                        <li>Ability Two</li>
                    </ul>
            </div>
        </div>
    </div>
  );
}

export default MoreInfo;