

/*ACTIONS */
const GET_CHARACTER = "GET_CHARACTER";
const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";

/*ACTIONS CREATORS*/

// add home
const getCharacter = (id) => {
  return function (dispatch) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
        dispatch({type:GET_CHARACTER,payload:data})
    });
  };
};

//add favorites
const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};
const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

// order and filter favorites
const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

/*Se deben exportar tanto las actions(constantes) como las
actions_creators(funciones) */
module.exports = {
  GET_CHARACTER,
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  getCharacter,
  addFav,
  removeFav,
  filterCards,
  orderCards,
};
