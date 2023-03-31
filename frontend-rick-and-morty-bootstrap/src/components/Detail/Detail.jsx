// React router dom imports
import { useParams } from "react-router-dom";
// Hooks
import { useState, useEffect } from "react";
// Axios
import axios from "axios";
/* =================================================*/

// ENV
const BACKEND_URL = "http://localhost:3001";

/* =================================================*/

function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${BACKEND_URL}/detail/${detailId}`).then((response) =>
            setCharacter(response.data)
        );
    }, []);

    return (
        <div>
            {character.origin ? (
                <div>
                    <h1>Name: {character.name}</h1>
                    <div>
                        <h2>Status: {character.status}</h2>
                        <h2>Specie: {character.species}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Origin: {character.origin.name}</h2>
                    </div>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                </div>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
}

export default Detail;
