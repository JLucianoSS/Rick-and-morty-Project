import "./App.css";
import axios from "axios";

import Nav from "./components/Nav/Nav.jsx";

import About from "./views/About/About.jsx";
import Detail from "./views/Detail/Detail.jsx";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import FavoritesView from "./views/Favorites/FavoritesView";
import Error from "./views/Error/Error";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { getCharacter, addCharacters } from "./redux/actions-types";
import { useDispatch, useSelector } from "react-redux";

function App() {
  /* ESTADOS Y FUNCIONALIDADES:*/
  /* Declaro un estado llamado "characters", esto es como decir "const characters = []" */
  // const [characters, setCharacters] = useState([]);
  //Estado que será usado para el renderizado condicional
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const EMAIL = "jorgelss912345@gmail.com";
  const PASSWORD = "Luciano96";

  // const login = (userData) => {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   } else {
  //     alert("Email o contraseña incorrecta");
  //   }
  // };

  const login = (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access ? navigate("/home") : alert("Email o contraseña incorrecta")
    });
  };

  const logout = () => {
    setAccess(false);
    dispatch(addCharacters([]));
    navigate("/");
  };

  // Funcion handle que se pasa por Nav
  function onSearch(id) {
    if (checkId(id)) {
      console.log("Personajes ingresados", characters);
      dispatch(getCharacter(id));
    } else window.alert("No existe ese ID o es Incorrecto");
  }
  // function onSearch(id) {
  //   if(checkId(id)){
  //     axios(`https://rickandmortyapi.com/api/character/${id}`).then(
  //       ({ data }) => {
  //         if (!characters.some((character) => character.id === data.id)) {
  //           /*El metodo some verifica si cada elemento(character) es igual al nuevo personaje ingresado(data.id)
  //           */
  //           console.log('Personaje Ingresado, data:',data)
  //           setCharacters([...characters, data]); // [ {data},{data},{data},{data}...]
  //         }else{
  //           window.alert("Cuidaoo, ese personaje ya existe");
  //         }
  //       }
  //     );
  //   }else {
  //     window.alert("No existe ese ID o es Incorrecto");
  //   }
  // }

  const checkId = (id) => {
    return id > 0 && id <= 826 && !isNaN(id);
  };

  // useEffect(() => {
  //   !access && navigate('/');
  // },[access]);

  /* Esta funcion establece todos los characters diferentes de id
     es decir GUARDA EN ESTADO TODOS MENOS ESE QUE TIENE ESE id 
     (bueno,lo borra del estado)*/
  function onClose(id) {
    const filterCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    // setCharacters(filterCharacters)
    dispatch(addCharacters(filterCharacters));
  }

  /* RENDERIZADO DE COMPONENTES */
  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logout={logout} />
      ) : (
        ""
      )}

      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={
            <Home
              characters={characters}
              onSearch={onSearch}
              onClose={onClose}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<FavoritesView />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

/*
APP COMPONENTE PRINCIPAL CON LA ESTRUCTURA GENERAL DE INTERFAZ
*/
