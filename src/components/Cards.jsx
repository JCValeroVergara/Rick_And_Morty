import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
