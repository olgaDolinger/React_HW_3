import React from "react";
import * as S from "./deleteFilmPopup.styled";

class DeleteFilmPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  closePopup = () => {
    this.props.close();
  };

  onConfirm = () => {
    this.props.confirmPopup({action: this.props.popup, popupData: this.props.data})
  };

  render() {
    return (
      <S.Back>
        <S.DeletePopup>
          <S.CloseButton onClick={this.closePopup}>X</S.CloseButton>
          <S.Title>DELETE MOVIE</S.Title>
          <S.Message>Are you sure you want to delete this movie?</S.Message>
          <S.ConfirmButton onClick={this.onConfirm}>CONFIRM</S.ConfirmButton>
        </S.DeletePopup>
      </S.Back>
    );
  }
}

export default DeleteFilmPopup;
