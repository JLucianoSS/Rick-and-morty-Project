import {
  GET_CHARACTER,
  GET_CHARACTER_DETAIL,
  ADD_CHARACTERS,
  CLEAN_DETAIL,
  ADD_FAV,
  FILTER,
  ORDER,
  REMOVE_FAV,
} from "./actions";

const initialState = {
  characters: [], // home state
  characterDetail: [], // detail state
  myFavorites: [], //favorites state
  allCharacters: [], //aux order and filter favorites
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /*AÑADE PERSONAJES */
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
        window.alert("El personaje que intenta ingresar ya existe");
        return state;
      }

    /*DETALLA  UN PERSONAJE */
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    /*BORRA/ES DECIR CREA UN NUEVO ARRAY DE 
    CHARACTERS */
    case ADD_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    /*LIMPIA EL DETALLE DE UN PERSONAJE */
    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    /*AÑADE PERSONAJES A FAVORITOS */
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // case ADD_FAV:
    //   return {
    //     ...state,
    //     allCharacters: [...state.allCharacters, action.payload],
    //     myFavorites: [...state.myFavorites, action.payload],
    //   };

    /*BORRA PERSONAJES DE FAVORITOS */
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (myFavorite) => myFavorite.id !== Number(action.payload)
    //     ),
    //   };

    /*FILTRA PERSONAJES EN FAVORITOS */
    case FILTER:
      const filterByGender = state.allCharacters.filter((char) => {
        if (char.gender === action.payload) return true;
        else if (action.payload === "Todos") return true;
        return false;
      });
      return {
        ...state,
        myFavorites: filterByGender,
      };

    /*ORDENA PERSONAJES EN FAVORITOS */
    case ORDER:
      const ordered = state.myFavorites.sort((a, b) => {
        if (action.payload === "A") return a.id - b.id;
        else if (action.payload === "D") return b.id - a.id;
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
