import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={style.containerCards}>
      {characters.map((character) => (
        <div>
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        </div>
      ))}
    </div>
  );
}

/*
 - El componenete Cards mapea la propiedad characters que viene por props y asigna cada propiedad a Card
 - Card establece las propiedades que llegarán al objeto props de ese componente
  <Card
    id={Rick.id}
    name={Rick.name}
    status={Rick.status}
    species={Rick.species}
    gender={Rick.gender}
    origin={Rick.origin.name}
    image={Rick.image}
    onClose={() => window.alert("Emulamos que se cierra la card")}
  />

*/
