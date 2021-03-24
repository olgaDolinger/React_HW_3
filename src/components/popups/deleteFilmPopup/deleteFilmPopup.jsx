import React from "react";
import * as S from "./deleteFilmPopup.styled";
import * as PropTypes from "prop-types";
import * as ReactDOM from "react-dom";

const DeleteFilmPopup = (props) => {
  const { closePopup, confirmPopup, isOpened, error } = props;
  const el = document.getElementById("root");

  const onClickClose = () => {
    closePopup();
  };

  const onClickConfirm = () => {
    confirmPopup();
  };

  const hasError = () => {
    return error != undefined;
  };

  const showPopup = () => {
    return (
      isOpened && (
        <S.Back>
          <S.DeletePopup>
            <S.CloseButton onClick={onClickClose}>X</S.CloseButton>
            <S.Title>DELETE MOVIE</S.Title>
            <S.Message>Are you sure you want to delete this movie?</S.Message>
            <S.ConfirmButton onClick={onClickConfirm}>CONFIRM</S.ConfirmButton>
            {hasError() && <S.ErrorMessage>{error}</S.ErrorMessage>}
          </S.DeletePopup>
        </S.Back>
      )
    );
  };

  return ReactDOM.createPortal(showPopup(), el);
};

DeleteFilmPopup.propTypes = {
  error: PropTypes.object.isRequired,
  isOpened: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  confirmPopup: PropTypes.func.isRequired,
};

export default DeleteFilmPopup;
