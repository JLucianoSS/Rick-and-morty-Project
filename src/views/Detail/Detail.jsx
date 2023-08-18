import axios from "axios";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          console.log("Detalle del personaje: ", data);
          setCharacter(data);
          setLoading(false);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  if (loading) {
    return (
      <center>
        <div>Cargando...</div>
      </center>
    );
  } else {
    return (
      <div className={style.containerDetail}>
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
      </div>
    );
  }
};

export default Detail;
