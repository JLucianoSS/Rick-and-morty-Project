import SearchBar from "../SearchBar/SearchBar";
import Menu from "../Menu/Menu";
import style from "./Nav.module.css";
import logo from "../../assets/images/logo-menu.png"



const Nav = (props) => {
  const { onSearch, logout } = props;

 
  return (
    <div className={style.containerNav}>

      <img className={style.logo} src={logo} alt="logo" />
      
      <div className={style.menu}>
        <Menu logout = {logout}/>
      </div>
      <div className={style.searchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
