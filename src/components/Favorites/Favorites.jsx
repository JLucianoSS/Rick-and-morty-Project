import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterCards, orderCards } from "../../redux/actions-types";
import style from "./Favorites.module.css";

const Favorites = () => {



  /*
  Ojo: El estado local aux se utiliza para renderizar correctamente
   los componentes. Es decir cuando se ordenan los personajes en myFavorites.
   Esto es necesario ya que cada componente debe eescuchar correctamente 
   cuando se realiza un cambio. 
    - Cuando se ordenan: en el reducer se realiza un ordenaminto 
      con sort sobre los personajes favoritos (NO CAMBIA EL TAMAÑO, SOLO EL
        EL ORDEN). POR ESO SE NECESITA aux PARA QUE ESE ESTADO LOCAL AYUDE 
        A RENDERIZAR EL COMPONENTE NUEVAMENTE.
    - Cuando se filtran: en el reducer se realiza un filtrado con filter
      eso quiere decir que cambia(REDUCEN) los personajes favoritos (cards)
    ESTO SE PUEDE EVITAR DESESTRUCTURANDO EL ESTADO GLOBAL DE REDUX
    DE LA SIGUIENTE MANERA: 
    */
   // const { myFavorites } = useSelector((state) => state);
  const  myFavorites  = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handlerOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCards(order)); // A o D
    setAux(!aux);
  };
  const handlerFilter = (event) => {
    const filter = event.target.value;
    dispatch(filterCards(filter)); // male, female o ....
    setAux(!aux);
  };

  useEffect(() => {
    console.log(myFavorites);
  },);

  return (
    <>
      <div className={style.container_selects}>
        <div className="favorites__ordered">
          <select onChange={handlerOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>

        <div className="favorites__container">
          <select onChange={handlerFilter}>
            <option value="Todos">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>

      <div className={style.containerFavorites}>
        {myFavorites.map((character) => (
          <div>
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              image={character.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;

// useReducer para proyectos pequeños
