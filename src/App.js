
import './App.css';
/* COMPONENTS */
import { CardList } from './components/CardList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className='container'>
      <Header/>
      <SearchBar/>
      <CardList/>
      
    </div>
  );
}

export default App;
