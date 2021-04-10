import React from "react";
import { connect } from "react-redux";
import EditFilmPopup from "./editFilmPopup";
import * as Actions from "store/actionCreators";

const EditFilmPopupContainer = (props) => {
  const { movieData, confirmEditPopup, closePopup, isEditMoviePopup } = props;

  const onClose = () => {
    closePopup();
  };

  const onSubmit = (data) => {
    closePopup();
    confirmEditPopup(data);
  };

  return (
    <>
      {isEditMoviePopup && (
        <EditFilmPopup
          data={movieData}
          closePopup={onClose}
          editMovieSubmit={onSubmit}
          isOpened={isEditMoviePopup}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { popupShow } = state;
  return {
    movieData: popupShow.movieData,
    isEditMoviePopup: popupShow.isEditMoviePopup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    confirmEditPopup: (data) => dispatch(Actions.editMovie(data)),
    closePopup: () => dispatch(Actions.closeEditMoviePopup()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFilmPopupContainer);
