import React from "react";
import connect from "react-redux/es/connect/connect";
import DeleteFilmPopup from "./deleteFilmPopup";
import * as Actions from "store/actionCreators";

const DeleteFilmPopupContainer = (props) => {
  const { movieData, isDeleteMoviePopup,error, deleteMovie, closePopup } = props;

  const onConfirmPopup = () => {
    deleteMovie(movieData);
  };

  const onClose = () => {
    closePopup();
  };

  return (
    <DeleteFilmPopup
      isOpened={isDeleteMoviePopup}
      confirmPopup={onConfirmPopup}
      closePopup={onClose}
      error={error}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (filmData) => dispatch(Actions.deleteMovie(filmData)),
    closePopup: () => dispatch(Actions.closeDeleteMoviePopup()),
  };
};

const mapStateToProps = (state) => {
  const { popupShow } = state;
  return {
    movieData: popupShow.movieData,
    isDeleteMoviePopup: popupShow.isDeleteMoviePopup,
    error: popupShow.error,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteFilmPopupContainer);
