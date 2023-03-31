// Assets
import logo from "../../assets/rick-and-morty.png";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

// Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Component imports
import SearchBar from "../SearchBar/SearchBar";

// React router dom imports
import { Link } from "react-router-dom";

/* =================================================*/

/* =================================================*/

function NavComp(props) {
    const { onSearch, count, logout, user } = props;

    const handleSubmit = (event) => {
        logout();
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Link to="/home">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="100"
                            className="d-inline-block align-top"
                            alt="Rick And Morty App"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link
                                to="/home"
                                className="text-reset text-decoration-none"
                            >
                                Home
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link
                                to="/About"
                                className="text-reset text-decoration-none"
                            >
                                About
                            </Link>
                        </Nav.Link>

                        <NavDropdown
                            title={<AiOutlineUser />}
                            id="navbarScrollingDropdown"
                            className=""
                        >
                            <NavDropdown.Item disabled>
                                {user.userName}
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item disabled>
                                Cards: {count}
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link
                                        to={`${user.userName}/cards`}
                                        className="text-secondary text-decoration-none "
                                    >
                                        My Cards
                                    </Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link
                                        to={`${user.userName}/favorites`}
                                        className="text-secondary text-decoration-none"
                                    >
                                        Favorites
                                    </Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link disabled className="text-secondary">
                                    Create Card
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item>
                                <Button
                                    variant="danger"
                                    type="submit"
                                    size="sm"
                                    onClick={handleSubmit}
                                >
                                    Logout
                                </Button>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="https://github.com/FranciscoYorlano"
                            target="_blank"
                        >
                            <VscGithub />
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.linkedin.com/in/francisco-yorlano/"
                            target="_blank"
                        >
                            <BsLinkedin />
                        </Nav.Link>
                    </Nav>
                    <SearchBar onSearch={onSearch} user={user} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComp;
