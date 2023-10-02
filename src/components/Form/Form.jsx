import { useState } from "react";
import validate from "./validation";
import style from "./Form.module.css";

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "jorgelss912345@gmail.com",
    password: "jorge123",
  });

  const [errors, setErrors] = useState({});

  /*
  - La siguiente función captura del evento onChange de cualquier input, su nombre("name" por eso se debe definir para identificar el input)
    y su valor("value").
  - [property]:value es una notacion de bracket. La usamos porque en nuestro estado se maneja un objeto con la siguiente forma:
      { email:'',
        password:'',
      }*/
  const handleChange = (event) => {
    const property = event.target.name; //email o password
    const value = event.target.value; //lo que se escriba en "email" o lo que se escriba en "password"
    setUserData({
      ...userData,
      [property]: value,
    }); //actualiza userData
    setErrors(
      validate({
        ...userData,
        [property]: value,
      })
    ); //valida errors y actualiza
  };

  /* En la siguiente función, la sentencia event.preventDefault() evita que  recargue nuevamente la pagina al presionar submit,
  evitando asi este comportamiento que por default ocurre solo en los formularios*/
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className="">
      <form className={style.containerForm} action="" onSubmit={handleSubmit}>
        <label className={style.email_title} htmlFor="">
          Email:
        </label>
        <input
          className={style.input}
          type="email"
          value={userData.email}
          name="email"
          onChange={handleChange}
        />
        <p className={style.error}>{errors.email}</p>

        <hr className={style.password_title} />

        <label className={style.password_title} htmlFor="">
          Password:
        </label>
        <input
          className={style.input}
          type="password"
          value={userData.password}
          name="password"
          onChange={handleChange}
        />
        <p className={style.error}>{errors.password}</p>

        <button className={`${style.btn} ${style.primary}`} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
// Propiedad name requerida en los inputs para poder idetificar esos campos a trabajar

export default Form;
