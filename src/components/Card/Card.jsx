import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({
  id,
  name,
  species,
  gender,
  status,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, status, origin, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      <div>
        <img className={style.front} src={image} alt={name} />
      </div>

      <div>
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
      </div>

      <div className={style.species}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{status}</h2>
        <h2>{origin}</h2>
      </div>

      <div className={style.btn}>
        <button onClick={() => onClose(id)}>X</button>
      </div>
      <div>
        <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
