import React from "react";
import * as S from "./addFilmPopup.styled";
import { Actions } from "../../../utils/Categories";
import MultiSelect from "../../multy-select/multy-select";

class AddFilmPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: [],
      year: "",
      url: "",
      overview: "",
      runtime: "",
    };
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onCategoryChange = (category) => {
    this.setState({ category });
  };

  onYearChange = (event) => {
    const data = event.target.value;
    if (/^(\d){0,4}$/g.test(data)) {
      this.setState({ year: data });
    }
  };

  onUrlChange = (event) => {
    this.setState({ url: event.target.value });
  };

  onOverviewChange = (event) => {
    this.setState({ overview: event.target.value });
  };

  onRuntimeChange = (event) => {
    const data = event.target.value;
    if (/^(\d){0,30}$/g.test(data)) {
      this.setState({ runtime: data });
    }
  };

  closePopup = () => {
    this.props.close();
  };

  onReset = () => {
    this.setState({
      title: "",
      category: [],
      year: "",
      url: "",
      overview: "",
      runtime: "",
    });
  };

  onConfirm = () => {
    this.props.confirmPopup({
      action: Actions.addFilm,
      popupData: {
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
        <S.AddPopup>
          <S.CloseButton onClick={this.closePopup}>X</S.CloseButton>
          <S.Title>ADD MOVIE</S.Title>

          <S.Label>TITLE</S.Label>
          <S.Input value={this.state.title} onChange={this.onTitleChange} />

          <S.Label>RELEASE DATE</S.Label>
          <S.Input value={this.state.year} onChange={this.onYearChange} />

          <S.Label>MOVIE URL</S.Label>
          <S.TextArea value={this.state.url} onChange={this.onUrlChange} />

          <S.Label>GENRE</S.Label>
          <MultiSelect onCategoryChange={this.onCategoryChange} selected={this.state.category} />

          <S.Label>OVERVIEW</S.Label>
          <S.TextArea
            value={this.state.overview}
            onChange={this.onOverviewChange}
          />

          <S.Label>RUNTIME</S.Label>
          <S.Input value={this.state.runtime} onChange={this.onRuntimeChange} />

          <S.Buttons>
            <S.ConfirmButton onClick={this.onConfirm}>SUBMIT</S.ConfirmButton>
            <S.ResetButton onClick={this.onReset}>RESET</S.ResetButton>
          </S.Buttons>
        </S.AddPopup>
      </S.Back>
    );
  }
}

export default AddFilmPopup;
