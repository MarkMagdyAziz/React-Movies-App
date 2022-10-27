import { React, useContext } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { getSearch } from "../../services/movies";
import { Button, Row } from "react-bootstrap";
import { DarkModeContext } from "../../context/DarkModeContext";

import "./style.css";
import MyCard from "../card/MyCard";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const { darkMode } = useContext(DarkModeContext);

  const handleSearch = (e) => {
    e.preventDefault();
    let q = e.target.value;
    console.log("query:", q);
    setQuery(q);
    if (q.length > 2) {
      getSearch(q).then((movies) => {
        setMovies(movies);
      });
    } else if (q.length < 2) {
      setMovies([]);
    }
    console.log("movies:", movies);
  };

  return (
    <div
      className={`container-fluid shadow min-vh-100 ${
        darkMode ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="input-group">
            <input
              className={`form-control border py-2 mb-2 ${
                darkMode ? "bg-dark text-white" : "bg-light text-black"
              }`}
              type="search"
              name="query"
              onChange={(e) => handleSearch(e)}
              value={query}
            />
            <span className="input-group-append">
              <button
                className="btn btn-outline-secondary bg-red border-start-0 border-bottom-0 border ms-n5"
                type="button"
              >
                <FontAwesomeIcon className="text-warning" icon={faSearch} />
              </button>
            </span>
          </div>
        </div>
      </div>
      <Row>
        {movies.map((movie) => {
          return <MyCard movie={movie} key={movie.id} />;
        })}
      </Row>
    </div>
  );
}
