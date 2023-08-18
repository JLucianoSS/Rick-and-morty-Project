import Favorites from "../../components/Favorites/Favorites";
import styles from "./FavoritesView.module.css";

const FavoritesView = () => {
  return (
    <div className={styles.containerFavorites}>
      <h1>Favoritos</h1>

      <div>
        <Favorites />
      </div>
    </div>
  );
};

export default FavoritesView;
