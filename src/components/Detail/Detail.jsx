import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '6fba235361fe.b92f7b30cc44b9236d18';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <div>
        <button>
          <Link to="/home">Home</Link>
        </button>
      </div>

      <div>
        <h1>{character?.name}</h1>
      </div>

      <div>
        <img
          style={{ borderRadius: '999999rem' }}
          src={character?.image}
          alt={character?.name}
        />
      </div>

      <div>
        <h2>{character?.species}</h2>
        <h2>{character?.gender}</h2>
        <h2>{character?.status}</h2>
        <h2>{character?.origin?.name}</h2>
      </div>
    </div>
  );
};

export default Detail;
