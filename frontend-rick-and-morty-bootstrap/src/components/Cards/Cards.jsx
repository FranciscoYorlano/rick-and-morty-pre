// Components
import CardsContainer from "../CardsContainer/CardsContainer";

/* =================================================*/

/* =================================================*/

function Cards(props) {
    const { characters, onClose, addFavorite, removeFavorite } = props;

    return (
        <CardsContainer
            characters={characters}
            onClose={onClose}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
        />
    );
}

export default Cards;
