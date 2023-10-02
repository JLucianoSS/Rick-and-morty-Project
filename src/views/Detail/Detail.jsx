import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail, cleanDetail } from "../../redux/actions-types";

const Detail = () => {
  const { id } = useParams();
  const character = useSelector((state) => state.characterDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    /*Cuando el componente se monta */
    dispatch(getCharacterDetail(id));

    return () => {
      /*Cuando el componente se desmonta */
      dispatch(cleanDetail());
    };
  }, [id]);

  /*NOTA: Siempre limpiar el estado cuando un componente ya no esté siendo utilizado: por ejemplo en detail es necesario
  porque solo necesitamos el estado para la vista de detalle cuando se hace click sobre el personaje, pero
  cuando abandonas la vista de detalle ya no es necesario, por lo tanto hay que limpiar el detalle */

  return (
    <div className={style.containerDetail}>
      {character.name ? (
        <>
          <h1 className={style.name}>{character.name}</h1>

          <div className={style.info}>
            <div className={style.features}>
              <h3>STATUS: {character.status}</h3>
              <h3>GENDER: {character.species}</h3>
              <h3>SPECIE: {character.gender}</h3>
              <h3>ORIGIN: {character.origin ? character.origin.name : ""}</h3>
            </div>
            <img
              className={style.img}
              src={character.image}
              alt={character.name}
            />
          </div>
        </>
      ) : (
        <center>
          <h3>Cargando...</h3>
        </center>
      )}
    </div>
  );
};

export default Detail;
