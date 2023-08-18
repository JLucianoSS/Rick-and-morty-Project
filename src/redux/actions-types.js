
/*actions-types */
const {GET_CHARACTER,GET_CHARACTER_DETAIL,CLEAN_DETAIL,ADD_FAV,REMOVE_FAV,ORDER,FILTER} =  require('./actions')


/*actions-type CREATORS*/
// add character in home
const getCharacter = (id) => {
  return function (dispatch) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
        dispatch({type:GET_CHARACTER,payload:data})
    });
  };
};


// use character in detail
const getCharacterDetail = (id) => {
  return function (dispatch){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
        dispatch({type:GET_CHARACTER_DETAIL,payload:data})
    });
  }
}

const cleanDetail = () => {
  return {type: CLEAN_DETAIL}
}

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

/*Se deben exportar tanto las actions-type(constantes) como las
actions-type_creators(funciones) */
module.exports = {
  getCharacter,
  getCharacterDetail,
  cleanDetail,
  addFav,
  removeFav,
  filterCards,
  orderCards,
};
