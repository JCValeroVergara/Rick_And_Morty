import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Favorites from './components/Favorites/Favorites';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '6fba235361fe.b92f7b30cc44b9236d18';
// const username = 'jvalero2009@gmail.com';
// const password = 'hola123';
const URL = 'http://localhost:3001/rickandmorty/login';
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { username, password } = userData;
      const { data } = await axios(
        URL + `?email=${username}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert('¡No hay personajes con este ID!');
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (characters) => characters.id !== id
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {location.pathname !== '/' && (
        <Nav onSearch={onSearch} setAccess={setAccess} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
