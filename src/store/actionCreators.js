import ACTIONS from "./actionTypes";
import axios from "axios";
import { CONSTANTS } from "../utils/Constants";
import { deleteMovieError, parseInitData } from "../utils/Parsers";

const getInitialData = (sortBy = "", filter = []) => (
  dispatch
) => {

  const data = {
    sortBy,
    filter,
    sortOrder: 'asc',
  };

  return axios
    .get(CONSTANTS.GET_MOVIES, { params: data })
    .then((data) => parseInitData(data))
    .then((result) =>
      dispatch({
        type: ACTIONS.GET_INITIAL_DATA,
        payload: result,
      })
    )
    .catch((e) => {
      dispatch({ type: ACTIONS.GET_INITIAL_DATA_ERROR, payload: e });
    });
};

const addMovie = (data) => (dispatch) => {
  const additionalData = {
    tagline: "Movie",
    vote_average: 0,
    vote_count: 0,
    budget: 0,
    revenue: 0,
  };
  const newMovie = Object.assign(data, additionalData);
  return axios
    .post(CONSTANTS.CREATE_MOVIE, newMovie)
    .then((resp) => {
      switch (resp.status) {
        case 201: {
          dispatch({ type: ACTIONS.ADD_MOVIE, payload: resp.data });
          break;
        }
      }
      dispatch({ type: ACTIONS.CLOSE_ADD_MOVIE_POPUP });
    })
    .catch((e) => {
      dispatch({ type: ACTIONS.ADD_MOVIE_ERROR, payload: e });
    });
};

const deleteMovie = (filmData) => (dispatch) => {
  return axios
    .delete(CONSTANTS.DELETE_MOVIE + filmData.id)
    .then((resp) => {
      switch (resp.status) {
        case 204: {
          dispatch(closeDeleteMoviePopup());
          dispatch({ type: ACTIONS.DELETE_MOVIE, payload: filmData });
          break;
        }
        case 404: {
          dispatch({ type: ACTIONS.DELETE_MOVIE, payload: "Movie not found" });
          break;
        }
        default:
          dispatch({ type: ACTIONS.POPUP_ERROR, payload: "Unknown error" });
          break;
      }
    })
    .catch((e) => {
      dispatch({ type: ACTIONS.POPUP_ERROR, payload: deleteMovieError(e) });
    });
};

const editMovie = (filmData) => (dispatch) => {
  return axios
    .put(CONSTANTS.UPDATE_MOVIE, filmData)
    .then((resp) => {
      switch (resp.status) {
        case 200: {
          dispatch({ type: ACTIONS.EDIT_MOVIE, payload: filmData });
          break;
        }
        case 204: {
          dispatch({ type: ACTIONS.EDIT_MOVIE_ERROR, payload: filmData });
          break;
        }
      }
      dispatch({ type: ACTIONS.CLOSE_EDIT_MOVIE_POPUP });
    })
    .catch((e) => {
      dispatch({ type: ACTIONS.EDIT_MOVIE_ERROR, payload: e });
    });
};

const showMovieDetails = (filmData) => ({
  type: ACTIONS.SHOW_DETAILS,
  payload: filmData,
});

const hideMovieDetails = () => ({
  type: ACTIONS.HIDE_DETAILS,
});

const showAddMoviePopup = () => ({
  type: ACTIONS.SHOW_ADD_MOVIE_POPUP,
});

const closeAddMoviePopup = () => ({
  type: ACTIONS.CLOSE_ADD_MOVIE_POPUP,
});

const closeDeleteMoviePopup = () => ({
  type: ACTIONS.CLOSE_DELETE_MOVIE_POPUP,
});

const closeEditMoviePopup = () => ({
  type: ACTIONS.CLOSE_EDIT_MOVIE_POPUP,
});

const deleteMoviePopup = (filmData) => ({
  type: ACTIONS.SHOW_DELETE_MOVIE_POPUP,
  payload: filmData,
});

const editMoviePopup = (filmData) => ({
  type: ACTIONS.SHOW_EDIT_MOVIE_POPUP,
  payload: filmData,
});

export {
  getInitialData,
  addMovie,
  deleteMovie,
  editMovie,
  showMovieDetails,
  hideMovieDetails,
  showAddMoviePopup,
  closeAddMoviePopup,
  closeDeleteMoviePopup,
  closeEditMoviePopup,
  deleteMoviePopup,
  editMoviePopup,
};
