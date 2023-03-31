// React Icons
import { AiFillHeart, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";

// Bootstrap
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

// Hooks
import { useEffect, useState } from "react";

// React router domAiOutlineHeart
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Axios
import axios from "axios";
/* =================================================*/

const BACKEND_URL = "http://localhost:3001";

/* =================================================*/

function CardComp(props) {
    const { char, onClose, favoritesCards, addFavorite, removeFavorite } =
        props;

    // States
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/rickandmorty/fav`)
            .then((response) => response.data)
            .then((response) => {
                response.forEach((favCard) => {
                    if (favCard.id === char.id) {
                        setIsFav(true);
                    }
                });
            });
    }, []);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            removeFavorite(char.id);
        } else {
            setIsFav(true);
            addFavorite(char);
        }
    };

    // Render
    return (
        <Card style={{ width: "14rem" }}>
            <Link to={`/detail/${char.id}`}>
                <Card.Img variant="top" src={char.image} alt={char.name} />
            </Link>

            <Card.Body>
                <Card.Title>
                    <h3>{char.name}</h3>
                </Card.Title>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroup.Item>{char.species}</ListGroup.Item>
                <ListGroup.Item>{char.gender}</ListGroup.Item>
                <ListGroup.Item>
                    <Badge
                        className="mx-2 my-0"
                        bg="light"
                        text="dark"
                        onClick={() => onClose(char.id)}
                    >
                        <AiOutlineClose size="2em" />
                    </Badge>

                    {isFav ? (
                        <Badge
                            className="mx-2"
                            bg="light"
                            text="dark"
                            onClick={handleFavorite}
                        >
                            <AiFillHeart size="2em" />
                        </Badge>
                    ) : (
                        <Badge
                            className="mx-2"
                            bg="light"
                            text="dark"
                            onClick={handleFavorite}
                        >
                            <AiOutlineHeart size="2em" />
                        </Badge>
                    )}
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        favoritesCards: state.favoritesCards,
    };
};

export default connect(mapStateToProps, null)(CardComp);
