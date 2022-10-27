import React from "react";
import { useEffect, useState, useContext } from "react";
import { getMovies } from "../../services/movies";
import MyCard from "../card/MyCard";
import Loader from "../loader/Loader";
import { Button, Row } from "react-bootstrap";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    setIsLoading(true);
    getMovies(page)
      .then((movies) => {
        setMovies(movies);
      })
      .then(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = () => {
    if (page < 5);
    setPage(page + 1);

    getMovies(page + 1).then((movies) => {
      setMovies(movies);
    });
  };
  const handlePrev = () => {
    if (page > 1);
    setPage(page - 1);

    getMovies(page - 1).then((movies) => {
      setMovies(movies);
    });
  };

  const renderMovies = (
    <div
      className={`container-fluid text-center mx-auto ${
        darkMode ? "bg-dark" : "bg-light"
      }`}
    >
      <Row className="mx-auto">
        {movies.map((movie) => {
          return <MyCard movie={movie} key={movie.id} />;
        })}
      </Row>
      <div className="text-center">
        <Button
          variant="danger"
          size="md"
          onClick={(e) => handlePrev()}
          className="m-3 text-center"
          disabled={page < 2}
        >
          Prev
        </Button>
        <Button
          variant="danger"
          size="md"
          onClick={(e) => handleNext()}
          className="m-3 text-center"
          disabled={page > 5}
        >
          Next
        </Button>
      </div>
    </div>
  );

  return <>{isLoading ? <Loader /> : renderMovies}</>;
}
