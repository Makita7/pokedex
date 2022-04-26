import { BsFillFilterSquareFill } from 'react-icons/bs';

function SearchBar() {
  return (
    <div>
        <div className="center">
            <input placeholder="Pokemon Name"/>
            <button className="btn">Search</button>
            <BsFillFilterSquareFill className='icon'/>
        </div>
    </div>
  );
}

export default SearchBar;