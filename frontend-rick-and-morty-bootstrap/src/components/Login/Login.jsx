// Assets
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import logo from "../../assets/rick-and-morty.png";
import styles from "./Login.module.css";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Functions
import validateLogin from "../../functions/validateLogin";

function Login(props) {
    // State
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const navigate = useNavigate();

    // Functions
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [property]: value });
        setErrors(validateLogin({ ...userData, [property]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.login(userData)) {
            navigate("/home");
        } else {
            setErrors({
                emailError: "",
                passwordError: "Invalid credentials, please try again.",
            });
            setUserData({
                email: "",
                password: "",
            });
        }
    };

    const buttonDisabled =
        Object.values(errors).some((error) => error !== "") ||
        Object.values(userData).some((value) => value === "");

    // Render
    return (
        <Row>
            <Col xs="10" sm="8" lg="4" xl="3" className="m-auto">
                <img
                    src={logo}
                    alt="Rick And Morty App"
                    style={{ width: "20rem" }}
                    className="mt-5 mb-3"
                />
                <h1 class="mb-3 fw-light text-secondary">Please sign in</h1>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">
                            <small>{errors.emailError}</small>
                        </span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                        />
                        <span className="text-danger">
                            <small>{errors.passwordError}</small>
                        </span>
                    </Form.Group>
                    <div className="d-grid">
                        <Button
                            type="submit"
                            disabled={buttonDisabled}
                            className="mb-3"
                            size="lg"
                        >
                            Sign in
                        </Button>
                    </div>
                    <div>
                        <a
                            href="https://github.com/FranciscoYorlano"
                            target="_blank"
                            className="text-reset mx-2"
                        >
                            <VscGithub size="2em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/francisco-yorlano/"
                            target="_blank"
                            className="text-reset mx-2"
                        >
                            <BsLinkedin size="2em" />
                        </a>
                    </div>
                </Form>
            </Col>
        </Row>
    );
}

export default Login;
