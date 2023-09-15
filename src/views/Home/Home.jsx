import { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";
import getRandomId from './utils'

const Home = (props) => {
  const {characters, onSearch, onClose, } = props;

  useEffect(()=>{
    console.log("CARACTERES",characters);
    
  },[])



  return (
    <>
      <div className={style.contenedorHome}>

        <button className={style.button} type="button" onClick={() => onSearch(getRandomId())}>
          Random Character
        </button>

        <div className={style.cards}>
          <Cards characters={characters} onClose={onClose} />
        </div>

      </div>
    </>
  );
};

export default Home;
