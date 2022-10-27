import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link as RouteLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import { favMovie, removeFavMovie } from "../../store/Actions/favMovie";

export default function MyCard(props) {
  const { title, id, vote_average, release_date, backdrop_path } = props.movie;

  const favMoviesStore = useSelector(
    ({ favMovieReducer }) => favMovieReducer.favorites
  );

  const checkFav = favMoviesStore.some((movie) => {
    return movie.id === id;
  });

  const dispatch = useDispatch();

  const handleToggleFavMovie = (e, movie) => {
    e.preventDefault();
    checkFav ? dispatch(removeFavMovie(movie.id)) : dispatch(favMovie(movie));
  };
  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      xxl={3}
      className="mt-3 mx-auto  d-flex  justify-content-around"
    >
      <Card
        border="primary bg-info text-white"
        style={{ width: "22rem", height: "25rem" }}
      >
        <Card.Header
          className="fw-bold fs-6 "
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Card.Header>
        <Card.Body>
          <Card.Title>Votes: {vote_average}</Card.Title>
          <Card.Text>Release Date: {release_date}</Card.Text>
          <img
            className="img-thumbnail"
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={`${title}`}
          />
          <div className="mt-5 text-center">
            <RouteLink to={`/movie/${id}`} className="text-center">
              <Button
                variant="outline-light"
                size="sm"
                className=" outline-dark"
              >
                Details
              </Button>
            </RouteLink>
            <Button
              variant={checkFav ? "light" : "outline-light"}
              size="sm"
              className="outline-dark ms-1"
              onClick={(event) => handleToggleFavMovie(event, props.movie)}
            >
              <FontAwesomeIcon icon={faHeart} className="text-warning" />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
