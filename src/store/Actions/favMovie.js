export const favMovie = (payload) => {
  return {
    payload,
    type: "ADD_FAV_MOVIE",
  };
};

export const removeFavMovie = (payload) => {
  return {
    payload,
    type: "REMOVE_FAV_MOVIE",
  };
};
