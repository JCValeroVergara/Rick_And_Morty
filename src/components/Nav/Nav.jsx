import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav className={styles.navBarraNavegacion}>
      <div>
        <button>
          <Link to="/">LOGOUT</Link>
        </button>
        <button>
          <Link to="/about">ABOUT</Link>
        </button>
        <button>
          <Link to="/home">HOME</Link>
        </button>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
