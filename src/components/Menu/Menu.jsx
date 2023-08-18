import { Link } from "react-router-dom";
import style from './Menu.module.css'

const Menu = (props) => {

  const {logout} = props
  return (
    <div className={style.containerMenu}>
      <Link to="/home">
        <button type="button">Home</button>
      </Link>
      <Link to="/favorites">
        <button type="button">Favorites</button>
      </Link>
      <Link to="/about">
        <button type="button">About</button>
      </Link>
      <button type="button" onClick={() => logout()}>
        Log out
      </button>
    </div>
  );
};

export default Menu;
