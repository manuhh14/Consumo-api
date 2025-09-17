
import { useState } from 'react';
import './App.css'

import rick from './img/rick-morty.png';
import { Personaje } from './components/Personaje';

function App() {

  const [characters, setCharacter] = useState(null)

 const requestApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character/')

    const characterApi = await api.json()
    //console.log(characterApi)
    setCharacter(characterApi.results)
  }

  return (
    <div className='App'>
          <header className='App-header'>
            <h1 className='title'>Rirck y Morty</h1>
    
    
            {characters ? (
              <Personaje characters={characters} />
            ) : (
              <>
                <img src={rick} alt="img-home" />
                <button onClick={requestApi} className='btn-search'> Buscar personaje</button>
              </>
            )}
    
            
            
    
          </header>
        </div>
  )
}

export default App


