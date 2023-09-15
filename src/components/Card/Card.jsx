import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions-types";
import style from "./Card.module.css";

export default function Card(props) {
  const location = useLocation();

  /* SUSCRIPCION AL ESTADO GLOBAL */
  const myFavorites = useSelector((state) => state.myFavorites);

  /*HOOK PARA HACER DISPATCH */
  const dispatch = useDispatch();

  /*ESTADO LOCAL */
  const [isFav, setIsFav] = useState(false);

  /*CUANDO SE MODIFICA EL ESTADO */
  useEffect(() => {
    console.log('Favoritos ingresados',myFavorites);
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  /* ACTUALIZA EL ESTADO DE REDUX SEGUN SEA EL CASO */
  const handleFavorite = () => {
    dispatch(isFav ? removeFav(props.id) : addFav(props));
    setIsFav(!isFav);
  };

  const handleClose = () => {
    props.onClose(props.id);
    /* Borra en Home y borra en Favoritos */
    dispatch(removeFav(props.id)); /*COMENTA AQUI SI SOLO QUIERES BORRAR EN FAVORITOS */
  };

  return (
    <div className={style.contenedorCard}>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      
      
      <img
        className={style.background_image}
        src={props.image}
        alt={props.name}
      />
      <div className={style.card_content}>
        <Link to={`/detail/${props.id}`}>
          <h2 className={style.name}>{props.name}</h2>
        </Link>
      </div>



      <div className={style.button_close}>
        {location.pathname !== "/favorites" && (
          <button onClick={handleClose}>X</button>
        )}
      </div>


      <div className={style.features}>
        {/* <h2>{props.status}</h2> */}
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
        {/* <h2>{props.origin ? props.origin.name : ""}</h2> */}
      </div>
    </div>
  );
}

/* 
- onClick es un evento que ejecutará una función(llamada onClose) que viene por props, desde App/Cards:
   desde App/Cards llega ⬇
   const props = {
      onClose: (id) => {
         const filterCharacters =  characters.filter((character) => character.id !== Number(id))
         setCharacters(filterCharacters)
      }
   }



*/
