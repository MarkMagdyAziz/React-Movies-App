import { React, useContext } from "react";
import { useSelector } from "react-redux";
import MyCard from "../card/MyCard";
import { Row } from "react-bootstrap";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Favorit() {
  const { darkMode } = useContext(DarkModeContext);

  const favMoviesStore = useSelector(
    ({ favMovieReducer }) => favMovieReducer.favorites
  );

  console.log(favMoviesStore);

  return (
    <>
      <div
        className={`container-fluid text-center mx-auto min-vh-100 ${
          darkMode ? " bg-dark" : "bg-light"
        }`}
      >
        <Row className="mx-auto">
          {favMoviesStore.map((movie) => {
            return <MyCard movie={movie} key={movie.id} />;
          })}
        </Row>
      </div>
    </>
  );
}
