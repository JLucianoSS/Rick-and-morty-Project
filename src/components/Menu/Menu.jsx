import { Link } from "react-router-dom";
import style from './Menu.module.css'
import img from "../../assets/icons/cerrar-sesion.png"

const Menu = (props) => {

  const {logout} = props
  return (
    <div className={style.containerMenu}>
      <Link to="/home">
        <button className={`${style.btn} ${style.primary}`} type="button">Home</button>
      </Link>
      <Link to="/favorites">
        <button className={`${style.btn} ${style.primary}`} type="button">Favorites</button>
      </Link>
      <Link to="/about">
        <button className={`${style.btn} ${style.primary}`} type="button">About</button>
      </Link>
      <button className={`${style.btn} ${style.primary}`} type="button" onClick={() => logout()}>
        <img className={style.img} src={img} alt="" srcset="" />
      </button>
    </div>
  );
};

export default Menu;
