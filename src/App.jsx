
import './App.css'

import rick from './img/rick-morty.png';

function App() {
  const requestApi = async() => {
    const api = await fetch('https://rickandmortyapi.com/api/character/')
    console.log( api);

    const charactersApi = await api.json();
    console.log(charactersApi);
  }

  return (
    <div className='App'>

      <header className='App-header'>
        <h1 className='title'>Rick & Morty</h1>
        {/* <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />*/}
        <img src={rick} alt="Rick Sanchez" className='img-home' />
        <button onClick={requestApi} className='btn-search'>Buscar personaje</button>

      </header>

    </div>
  )
}

export default App


