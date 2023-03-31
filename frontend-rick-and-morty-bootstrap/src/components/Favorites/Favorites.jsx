import logo from "../../assets/rick-and-morty.png";
// Components
import CardsContainer from "../CardsContainer/CardsContainer";
// React router dom
import { Link } from "react-router-dom";
// Redux react
import { connect } from "react-redux";

/* =================================================*/

/* =================================================*/

function Favorites(props) {
    const { favoritesCards, onClose, addFavorite, removeFavorite } = props;

    return (
        <>
            {favoritesCards.length ? (
                <CardsContainer
                    characters={favoritesCards}
                    onClose={onClose}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                />
            ) : (
                <div>
                    <h2>Sorry, you dont have any favorite card yet.</h2>
                    <p>
                        Go to <Link to="/home">home</Link>, look for cards and
                        put them in your favorite cards section
                    </p>
                    <Link to="/home">
                        <img src={logo} alt="Rick And Morty App" />
                    </Link>
                </div>
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        favoritesCards: state.favoritesCards,
    };
};

export default connect(mapStateToProps, null)(Favorites);
