import styles from './Form.module.css';
import { useState } from 'react';
import validation from '../Validation/Validation';

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
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
    <div className={styles.box}>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN:</h2>
        <div className={styles.inputBox}>
          <label htmlFor="username">Username:</label>
          <ion-icon name="person-circle-outline"></ion-icon>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handlInputChange}
          />
          {errors.username && (
            <p className={styles.errors}>{errors.username}</p>
          )}
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="password">Password:</label>
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handlInputChange}
          />
          {errors.password && (
            <p className={styles.errors}>{errors.password}</p>
          )}
        </div>
        <div className={styles.forget}>
          <label htmlFor="">
            <input type="checkbox" />
            Remember Me <a href="#">Forget password</a>
          </label>
        </div>
        <button>
          <span>LOG IN</span>
        </button>
        <div className={styles.register}>
          <p>
            Don't hava acounnt <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Form;
