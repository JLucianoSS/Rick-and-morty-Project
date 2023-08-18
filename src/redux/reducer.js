import { GET_CHARACTER, ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
  characters: [], // home state
  myFavorites: [], //favorites state
  allCharacters: [], //aux order and filterin favorites
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_CHARACTER:
      const characterExist = state.characters.some(
        (character) => character.id === action.payload.id
      );
      if (!characterExist) {
        return {
          ...state,
          characters: [...state.characters, action.payload],
        };
      } else {
        window.alert("Cuidaoo, ese personaje ya existe");
        return state;
      }

    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (myFavorite) => myFavorite.id !== Number(action.payload)
        ),
      };

    case FILTER:
      const filterByGender = state.allCharacters.filter((char) => {
        if (char.gender === action.payload) {
          return true;
        } else if (action.payload === "Todos") {
          return true;
        }
        return false;
      });
      return {
        ...state,
        myFavorites: filterByGender,
      };

    case ORDER:
      const ordered = state.allCharacters.sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: ordered,
      };

    default:
      return { ...state };
  }
};

//NOTA PARA EL PROYECTO INDIVIDUAL: SI YO ORDENO DEBO FILTRAR SOBRE ESE ORDENAMIENTO O VICEVERSA

/*Filter crea un nuevo arreglo sin el elemento(character) con el id especificado
EN RESUMEN, LO BORRA */

export default rootReducer;
