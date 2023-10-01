import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  //grapeo de onSearch
  const handleClick = () => {
    props.onSearch(id);
    setId("");
  };

  return (
    <div className={style.contenedorSearchBar}>
      <input
        className={style.input}
        type="search"
        onKeyUp={handleKeyPress}
        value={id}
        onChange={handleChange}
        placeholder="id"
      />
      <button
        className={`${style.btn} ${style.primary}`}
        onClick={handleClick}
        onKey={handleKeyPress}
        on
      >
        Agregar
      </button>

      {/* Grapear significa envolver en algo una funcion GRAPEAR */}
    </div>
  );
}

/* 
- onClick es un evento que ejecutará una función(llamada onSearch) que viene por props, desde Nav:
   desde Nav llega ⬇
   const props = {
      onSearch: (characterID) => {
         return  window.alert(characterID);
      }
   }
- La "() =>" usada en el onClick es para mantener el contexto correcto y se usa para
  garantizar que props.onSearch pueda acceder correctamente a su contexto donde fue creado(App.js).



*/
