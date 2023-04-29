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

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '6fba235361fe.b92f7b30cc44b9236d18';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'jvalero2009@gmail.com';
  const password = 'abcd1234';

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (characters) => characters.id !== id
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="container">
      {location.pathname === '/' ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
