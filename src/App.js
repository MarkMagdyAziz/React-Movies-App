import "./App.css";
import Login from "./components/form 1/Login";
import Register from "./components/form 2/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navb from "./components/navb/Navb";
import Home from "./components/home/Home";
import Notfound from "./components/notfound/Notfound";
import Todo from "./components/todo/Todo";
import MovieDetails from "./components/movieDetails/MovieDetails";
import SearchMovie from "./components/searchMovie/SearchMovie";
import Faviort from "./components/favorit/Favorit";
import { DarkModeProvider } from "./context/DarkModeContext";
import MoviesClass from "./components/moviesClassComp/MoviesClass";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navb />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/movie/:id" component={MovieDetails} />
          <Route exact path="/search" component={SearchMovie} />
          <Route exact path="/favorit" component={Faviort} />
          <Route exact path="/moviesClass" component={MoviesClass} />
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
