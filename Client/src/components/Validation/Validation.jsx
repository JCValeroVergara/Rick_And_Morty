const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const regexPassword = /^(?=.*\d).+$/;

const validation = (userData) => {
  let errors = {};
  if (!regexEmail.test(userData.username)) {
    errors.username = "El e-mail es invalido";
  }
  if (!userData.username) {
    errors.username = "Este campo no puede estar vacio";
  }
  if (userData.username.length > 35) {
    errors.username = "el e-mail no puede superar los 35 carateres";
  }
  if (!regexPassword.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
