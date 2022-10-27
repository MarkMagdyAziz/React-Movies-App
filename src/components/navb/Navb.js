import { React, useContext } from "react";

import { Nav, Navbar, Container, Badge, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faFilm, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Navb() {
  const favMoviesStore = useSelector(
    ({ favMovieReducer }) => favMovieReducer.favorites
  );

  const favMovieCount = favMoviesStore.length;
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleToggleMode = () => {
    toggleDarkMode();
  };
  return (
    <>
      <Navbar
        className={`${darkMode ? "bg-dark " : "bg-light text-black"}`}
        variant={`${darkMode ? "dark " : "light"}`}
      >
        <Container>
          <Navbar.Brand Link to="/" className="text-warning">
            <FontAwesomeIcon className="fs-3" icon={faFilm} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/moviesClass">
              Anime Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Movies Todo
            </Nav.Link>
          </Nav>
          <Navbar.Brand
            as={Link}
            to="/favorit"
            className="d-flex justify-content-between ml-auto"
          >
            <FontAwesomeIcon icon={faHeart} className="text-info me-1" />
            <Badge bg="warning" text="dark" pill>
              {favMovieCount}
            </Badge>
          </Navbar.Brand>
          <Form.Check
            type="switch"
            id="custom-switch"
            onClick={(e) => handleToggleMode()}
          />
        </Container>
      </Navbar>
    </>
  );
}
