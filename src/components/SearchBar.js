import { useState } from 'react';
import { BsFillFilterSquareFill } from 'react-icons/bs';

function SearchBar() {
  const [search, setSearch] = useState('');


  return (
    <div>
        <div className="center">
            <input placeholder="Pokemon Name" type='text' onChange={(event) =>{ 
                      setSearch(event.target.value);
                  }}/>
            <button className="btn">Search</button>
            <BsFillFilterSquareFill className='icon'/>
        </div>
    </div>
  );
}

export default SearchBar;