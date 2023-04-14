import style from "./Form.css";
import { useState } from "react";
import validation from "./Validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handlInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.inputbox}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handlInputChange}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      <hr />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handlInputChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button>Sumit:</button>
    </form>
  );
};
export default Form;
