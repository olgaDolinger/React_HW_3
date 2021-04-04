import { combineReducers } from "redux";
import * as initialState from "utils/Data";
import ACTIONS from "../actionTypes";

const popupShow = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ADD_MOVIE_POPUP: {
      return {
        ...state,
        ...{ isAddMoviePopup: true },
      };
    }
    case ACTIONS.SHOW_EDIT_MOVIE_POPUP: {
      return {
        ...state,
        ...{ isEditMoviePopup: true, movieData: action.payload },
      };
    }
    case ACTIONS.SHOW_DELETE_MOVIE_POPUP: {
      return {
        ...state,
        ...{ isDeleteMoviePopup: true, movieData: action.payload },
      };
    }
    case ACTIONS.CLOSE_ADD_MOVIE_POPUP: {
      return { ...state, ...{ isAddMoviePopup: false } };
    }
    case ACTIONS.CLOSE_EDIT_MOVIE_POPUP: {
      return { ...state, ...{ isEditMoviePopup: false, movieData: undefined } };
    }
    case ACTIONS.CLOSE_DELETE_MOVIE_POPUP: {
      return {
        ...state,
        ...{ isDeleteMoviePopup: false, movieData: undefined, error: undefined },
      };
    }
    case ACTIONS.POPUP_ERROR: {
      return {
        ...state,
        ...{ error: action.payload },
      };
    }
    default: {
      return state;
    }
  }
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_INITIAL_DATA: {
      return [ ...action.payload];
    }
    case ACTIONS.SET_INITIAL_DATA: {
      return [...action.payload];
    }
    case ACTIONS.ADD_MOVIE: {
      let movies = [...state];
      const id = state.length;
      const newMovie = Object.assign({}, action.payload, { id });
      return movies.concat([newMovie]);
    }
    case ACTIONS.DELETE_MOVIE: {
      let movies = [...state];
      const movie = action.payload;
      const index = movies.findIndex((item) => item.id === movie.id);
      movies.splice(index, 1);
      return movies;
    }
    case ACTIONS.EDIT_MOVIE: {
      const movies = Array.from(state);
      const movie = action.payload;
      const index = movies.findIndex((item) => (item.id = movie.id));
      movies[index] = movie;
      return movies;
    }
    default: {
      return state;
    }
  }
};

const useFilters = (state = initialState) => {
  return state;
};

const headerView = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_DETAILS: {
      return {
        ...state,
        ...{ isDetailsView: true, movieData: action.payload },
      };
    }
    case ACTIONS.HIDE_DETAILS: {
      return {
        ...state,
        ...{ isDetailsView: false, movieData: undefined },
      };
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  films,
  useFilters,
  headerView,
  popupShow,
});

export default rootReducer;
