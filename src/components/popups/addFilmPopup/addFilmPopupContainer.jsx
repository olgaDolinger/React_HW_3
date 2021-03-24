import React from "react";
import { connect } from "react-redux";
import AddFilmPopup from "./addFilmPopup";
import * as Actions from "../../../store/actionCreators";

const AddFilmPopupContainer = (props) => {
  const { popupShow } = props;

  const addMovieSubmit = (data) => {
    props.popupClose();
    props.addMovieSubmit(data);
  };
  const closePopup = () => {
    props.popupClose();
  };

  return (
    <>
      {popupShow && (
        <AddFilmPopup addMovieSubmit={addMovieSubmit} closePopup={closePopup} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { popupShow } = state;
  return { popupShow: popupShow.isAddMoviePopup };
};

const mapDispatchToProps = (dispatch) => {
  return {
    popupClose: () => dispatch(Actions.closeAddMoviePopup()),
    addMovieSubmit: (data) => dispatch(Actions.addMovie(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFilmPopupContainer);
