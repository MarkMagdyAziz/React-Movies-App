import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUsers } from "../../store/Actions/movies";
import Loader from "../loader/Loader";
import MyCard from "../card/MyCard";
import { Row } from "react-bootstrap";
import { DarkModeContext } from "../../context/DarkModeContext";

class MoviesClass extends Component {
  static contextType = DarkModeContext;

  componentDidMount() {
    this.props.loadUsers();
  }
  state = {};

  render() {
    const { data, loading, erorr } = this.props;

    if (!loading) {
      return (
        <div className="container">
          <Loader />
        </div>
      );
    }
    if (erorr) {
      return (
        <div className="container">
          <p>{this.props.erorr}</p>
        </div>
      );
    }
    return (
      <div
        className={`container-fluid text-center mx-auto ${
          this.context.darkMode ? "bg-dark" : "bg-light"
        }`}
      >
        <Row className="mx-auto">
          {data.map((movie) => {
            return <MyCard movie={movie} key={movie.id} />;
          })}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.thunkMoviesReducer.data,
  loading: state.thunkMoviesReducer.loading,
  error: state.thunkMoviesReducer.error,
});
const mapDispatchToProps = { loadUsers };
export default connect(mapStateToProps, mapDispatchToProps)(MoviesClass);
