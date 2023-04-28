import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({
  id,
  name,
  species,
  gender,
  status,
  origin,
  image,
  onClose,
}) {
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
    </div>
  );
}
