import { Link } from "react-router-dom";
import "./Card.css";

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
    <div className="card">
      <button className="Close" onClick={() => onClose(id)}>
        X
      </button>
      <img style={{ borderRadius: "999999rem" }} src={image} alt="" />
      <div className="InfoCard">
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{status}</h2>
        <h2>{origin}</h2>
      </div>
    </div>
  );
}
