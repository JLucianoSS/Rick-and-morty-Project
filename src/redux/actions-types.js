import axios from "axios";

/*actions-types */
import {
  GET_CHARACTER,
  GET_CHARACTER_DETAIL,
  ADD_CHARACTERS,
  CLEAN_DETAIL,
  ADD_FAV,
  REMOVE_FAV,
  ORDER,
  FILTER,
} from "./actions";

// const API = "rickandmortyapi.com/api";
const LOCAL = "localhost:3001/rickandmorty";

/*actions-type CREATORS*/
// add character in home
export const getCharacter = (id) => {
  return function (dispatch) {
    axios.get(`http://${LOCAL}/character/${id}`).then(({ data }) => {
      dispatch({ type: GET_CHARACTER, payload: data });
    });
  };
};

// use character in detail
export const getCharacterDetail = (id) => {
  return function (dispatch) {
    axios.get(`http://${LOCAL}/character/${id}`).then(({ data }) => {
      dispatch({ type: GET_CHARACTER_DETAIL, payload: data });
    });
  };
};

//ESTO AÑADE UN NUEVO ARRAY DE PERSONAJES Y APOYA PARA EL BORRADO
export const addCharacters = (characters) => {
  return { type: ADD_CHARACTERS, payload: characters };
};

//clean detail
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

//add favorites
// const addFav = (character) => {
//   return { type: ADD_FAV, payload: character };
// };
export const addFav = (char) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    const data = { character: char };
    // debugger
    axios.post(endpoint, data).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

// export const removeFav = (id) => {
//   return { type: REMOVE_FAV, payload: id };
// };
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};

// order and filter favorites
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

/* PETICION AL SERVER DE LA API DE RICK AND MORTY */
// const getCharacter = (id) => {
//   return function (dispatch) {
//     return fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//         dispatch({type:GET_CHARACTER,payload:data})
//     });
//   };
// };

/*Se deben exportar tanto las actions-type(constantes) como las
actions-type_creators(funciones) */
// module.exports = {
//   getCharacter,
//   getCharacterDetail,
//   addCharacters,
//   cleanDetail,
//   addFav,
//   removeFav,
//   filterCards,
//   orderCards,
// };
