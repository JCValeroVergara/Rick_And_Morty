import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handlChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handlChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}
