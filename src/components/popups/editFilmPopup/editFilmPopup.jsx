import React from "react";
import * as S from "./editFilmPopup.styled";
import { Actions } from "../../../utils/Categories";
import MultiSelect from "../../multy-select/multy-select";

class EditFilmPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.data.title,
      category: props.data.category,
      year: props.data.year,
      url: props.data.url,
      overview: props.data.overview,
      runtime: props.data.runtime,
    };
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onCategoryChange = (category) => {
    this.setState({ category });
  };

  onYearChange = (event) => {
    this.setState({ year: event.target.value });
  };

  onUrlChange = (event) => {
    this.setState({ url: event.target.value });
  };

  onOverviewChange = (event) => {
    this.setState({ overview: event.target.value });
  };

  onRuntimeChange = (event) => {
    this.setState({ runtime: event.target.value });
  };

  closePopup = () => {
    this.props.close();
  };

  onReset = () => {
    this.setState({
      title: this.props.data.title,
      category: this.props.data.category,
      year: this.props.data.year,
      url: this.props.data.url,
      overview: this.props.data.overview,
      runtime: this.props.data.runtime,
    });
  };

  onConfirm = () => {
    this.props.confirmPopup({
      action: Actions.editFilm,
      popupData: {
        id: this.props.data.id,
        title: this.state.title,
        category: this.state.category,
        year: this.state.year,
        url: this.state.url,
        overview: this.state.overview,
        runtime: this.state.runtime,
      },
    });
  };

  render() {
    return (
      <S.Back>
        <S.EditPopup>
          <S.CloseButton onClick={this.closePopup}>X</S.CloseButton>
          <S.Title>EDIT MOVIE</S.Title>

          <S.Label>MOVIE ID</S.Label>
          <S.Label>{this.props.data.id}</S.Label>

          <S.Label>TITLE</S.Label>
          <S.Input value={this.state.title} onChange={this.onTitleChange} />

          <S.Label>RELEASE DATE</S.Label>
          <S.Input value={this.state.year} onChange={this.onYearChange} />

          <S.Label>MOVIE URL</S.Label>
          <S.TextArea value={this.state.url} onChange={this.onUrlChange} />

          <S.Label>GENRE</S.Label>
          <MultiSelect
            onCategoryChange={this.onCategoryChange}
            selected={this.state.category}
          />

          <S.Label>OVERVIEW</S.Label>
          <S.TextArea
            value={this.state.overview}
            onChange={this.onOverviewChange}
          />

          <S.Label>RUNTIME</S.Label>
          <S.Input value={this.state.runtime} onChange={this.onRuntimeChange} />

          <S.Buttons>
            <S.ConfirmButton onClick={this.onConfirm}>CONFIRM</S.ConfirmButton>
            <S.ResetButton onClick={this.onReset}>RESET</S.ResetButton>
          </S.Buttons>
        </S.EditPopup>
      </S.Back>
    );
  }
}

export default EditFilmPopup;
