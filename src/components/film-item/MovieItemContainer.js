import React from "react";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as Actions from "store/actionCreators";
import { useHistory } from "react-router-dom";

const MovieItemContainer = (props) => {
  const { filmData, editFilm, deleteFilm } = props;
  let history = useHistory();

  const onMovieClick = (filmData) => {
    if (filmData) {
      history.push('/');
      history.push(`film/${filmData.id}`);
    }

    props.showDetails(filmData);
  };

  const onEditFilm = (filmData) => {
    props.editFilmPopup(filmData);
  };

  const onDeleteFilm = (filmData) => {
    props.deleteFilmPopup(filmData);
  };

  return (
    <MovieItem
      filmData={filmData}
      onClick={onMovieClick}
      editFilm={onEditFilm}
      deleteFilm={onDeleteFilm}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editFilmPopup: (filmData) => dispatch(Actions.editMoviePopup(filmData)),
    deleteFilmPopup: (filmData) => dispatch(Actions.deleteMoviePopup(filmData)),
    showDetails: (filmData) => dispatch(Actions.showMovieDetails(filmData)),
  };
};

export default connect(null, mapDispatchToProps)(MovieItemContainer);

MovieItemContainer.propTypes = {
  filmData: PropTypes.object.isRequired,
};
