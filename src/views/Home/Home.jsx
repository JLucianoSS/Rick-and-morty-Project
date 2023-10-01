import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";
import getRandomId from "./utils";
import imgrandon from "../../assets/icons/barajar.png";

const Home = (props) => {
  const { characters, onSearch, onClose } = props;

  useEffect(() => {
    console.log("CARACTERES", characters);
  }, []);

  return (
    <>
      <div className={style.fondoHome}>
        <div className={style["contenedorHome"]}>
          <button
            className={style.button}
            type="button"
            onClick={() => onSearch(getRandomId())}
          >
            <img className={style.imgrandon} src={imgrandon} alt="imgrandon" />
          </button>

          {characters.length === 0 ? (
            <div className={style.containerSpan}>
              <span>No hay personajes</span>
              <p>Agrega algunos ¡Vamos!</p>
            </div>
          ) : (
            <div className={style.cards}>
              <p>Personajes agregados: {characters.length}</p>

              <Cards characters={characters} onClose={onClose} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
