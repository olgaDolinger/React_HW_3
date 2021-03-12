import React, {useMemo} from "react";
import * as S from "./deleteFilmPopup.styled";
import * as PropTypes from "prop-types";

const DeleteFilmPopup = ({close, popup, data, confirmPopup}) =>
  useMemo(() => {
    const closePopup = () => {
      close();
    };

    const onConfirm = () => {
      confirmPopup({
        action: popup,
        popupData: data,
      });
    };

    return (
      <S.Back>
        <S.DeletePopup>
          <S.CloseButton onClick={closePopup}>X</S.CloseButton>
          <S.Title>DELETE MOVIE</S.Title>
          <S.Message>Are you sure you want to delete this movie?</S.Message>
          <S.ConfirmButton onClick={onConfirm}>CONFIRM</S.ConfirmButton>
        </S.DeletePopup>
      </S.Back>
    );
  }, [data]);

DeleteFilmPopup.propTypes = {
  confirmPopup: PropTypes.func.isRequired,
  popup: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default DeleteFilmPopup;
