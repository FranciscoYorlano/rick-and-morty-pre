// Styles
import "./App.css";

// Bootstrap
import Container from "react-bootstrap/Container";

// Component imports
import About from "./components/About/About";
import AlertBar from "./components/AlertBar/AlertBar";
import Detail from "./components/Detail/Detail";
import Cards from "./components/Cards/Cards";
import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavComp from "./components/NavComp/NavComp";
import NotFound from "./components/NotFound/NotFound";

// Hooks imports
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// React route dom imports
import { Route, Routes, Navigate } from "react-router-dom";

// Functions
import onSearchExt from "./functions/onSearch";

// React redux
import { connect } from "react-redux";
import { setGlobalError } from "./redux/actions";

// Axios
import axios from "axios";

/* =================================================*/
// Fake credencials
const user = {
    userName: "franyorlano",
    email: "admin@gmail.com",
    password: "admin123",
};

const BACKEND_URL = "http://localhost:3001";

/* =================================================*/

function App(props) {
    // States
    const [characters, setCharacters] = useState([]);
    const [access, setAccess] = useState(false);

    // Var
    const navigate = useNavigate();
    let counter = characters.length;

    // UseEffect
    useEffect(() => {
        !access && navigate("/login");
    }, []);

    // Functions
    const addFavorite = (char) => {
        axios
            .post(`${BACKEND_URL}/rickandmorty/fav`)
            .then((res) => console.log(res.data.status));
    };

    const removeFavorite = (id) => {
        axios
            .delete(`${BACKEND_URL}/rickandmorty/fav/${id}`)
            .then((res) => console.log(res.data.status));
    };

    const login = (userCredentials) => {
        const { email, password } = userCredentials;

        if (email === user.email && password === user.password) {
            setAccess(true);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setAccess(false);
        navigate("/login");
    };

    const onSearch = (id) => {
        props.setGlobalError("");
        onSearchExt(id, characters).then((obj) => {
            if (obj.error) {
                props.setGlobalError(obj.error);
            } else {
                setCharacters([...characters, obj.data]);
                props.setGlobalError(obj.error);
            }
        });
    };

    const onClose = (id) => {
        removeFavorite(id);
        setCharacters(characters.filter((char) => char.id !== id));
    };

    // Render
    return (
        <>
            {useLocation().pathname !== "/login" && (
                <NavComp
                    onSearch={onSearch}
                    logout={logout}
                    count={counter}
                    user={user}
                />
            )}

            <Container
                fluid
                className="justify-content-md-center text-center w-100 mt-3 mb-3"
            >
                {props.globalError && <AlertBar error={props.globalError} />}
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route
                        path={`${user.userName}/cards`}
                        element={
                            <Cards
                                characters={characters}
                                onClose={onClose}
                                addFavorite={addFavorite}
                                removeFavorite={removeFavorite}
                            />
                        }
                    />
                    <Route
                        path={`${user.userName}/favorites`}
                        element={
                            <Favorites
                                onClose={onClose}
                                addFavorite={addFavorite}
                                removeFavorite={removeFavorite}
                            />
                        }
                    />
                    <Route exact path="/" element={<Navigate to="/home" />} />
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/detail/:detailId" element={<Detail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        globalError: state.globalError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setGlobalError: (error) => dispatch(setGlobalError(error)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
