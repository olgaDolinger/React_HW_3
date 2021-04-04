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
    confirmEditPopup(data);
  };

  return (
    <>
      {isEditMoviePopup && (
        <EditFilmPopup
          data={movieData}
          onClose={onClose}
          onSubmit={onSubmit}
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
