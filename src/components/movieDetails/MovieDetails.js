import { React, useContext } from "react";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../services/movies";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function MovieDetails() {
  const ID = useParams().id;

  const [movie, setMovie] = useState({});

  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    getMovieDetails(ID).then((movie) => setMovie(movie));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    adult,
    original_language,
    original_title,
    overview,
    poster_path,
    status,
    tagline,
  } = movie;
  return (
    <div
      className={` text-white  container-fluid ${
        darkMode ? "bg-dark" : "bg-light"
      }`}
    >
      <Row>
        <Col xs={5}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="img-thumbnail"
            alt={`${original_title}`}
          />
        </Col>

        <Col xs={6}>
          <Card
            className={`${darkMode ? "bg-dark" : "bg-light text-black"} p-2`}
            border="none"
          >
            <Card.Title className="mt-1">{original_title}</Card.Title>
            <Card.Title className="mt-1">{tagline}</Card.Title>
            <Card.Subtitle className="mt-1">{status}</Card.Subtitle>
            <Card.Text className="mt-1">{overview}</Card.Text>
            <Card.Text className="mt-1">
              {adult ? (
                <span> For Adults only </span>
              ) : (
                <span> For All ages </span>
              )}
            </Card.Text>
            <Card.Text className="mt-1">
              <p>
                Langue:{" "}
                <span className="text-uppercase">{` ${original_language}`}</span>
              </p>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
