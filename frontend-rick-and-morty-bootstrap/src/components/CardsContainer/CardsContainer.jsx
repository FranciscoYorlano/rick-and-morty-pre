// Bootstrap
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styles
import styles from "./CardsContainer.module.css";

// Components
import CardComp from "../CardComp/CardComp";

/* =================================================*/

/* =================================================*/

function CardsContainer(props) {
    const { characters, onClose, addFavorite, removeFavorite } = props;
    return (
        <Row className="justify-content-center">
            {characters.length > 0 &&
                characters.map((char) => (
                    <Col key={char.id} className="mb-3">
                        <CardComp
                            char={char}
                            onClose={onClose}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                        />
                    </Col>
                ))}
        </Row>
    );
}

export default CardsContainer;
