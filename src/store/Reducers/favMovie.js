const initialState = { favorites: [] };
export default function favMovieReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAV_MOVIE":
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    //   return Object.assign({}, state, { favorites: action.payload });
    case "REMOVE_FAV_MOVIE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favMovie) => favMovie.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
