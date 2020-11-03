import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Pokemon from "./Components/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = e => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
        let results = response.data.results.map( p => p.name)
        setPokemon(results);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
