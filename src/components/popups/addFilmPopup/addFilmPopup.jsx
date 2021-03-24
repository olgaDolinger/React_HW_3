import React, { useState } from "react";
import * as S from "./addFilmPopup.styled";
import MultiSelect from "../../multy-select/multy-select";
import * as PropTypes from "prop-types";
import * as ReactDOM from "react-dom";

const AddFilmPopup = (props) => {
  const el = document.getElementById("root");

  const [title, setTitle] = useState("");
  const [genres, setCategory] = useState([]);
  const [release_date, setYear] = useState("");
  const [poster_path, setUrl] = useState("");
  const [overview, setOverview] = useState("");
  const [runtime, setRuntime] = useState(0);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onCategoryChange = (genres) => {
    setCategory(genres);
  };

  const onYearChange = (event) => {
    const data = event.target.value;
    if (/^(\d){0,4}$/g.test(data)) {
      setYear(new Date(data).toISOString().slice(0, 10));
    }
  };

  const onUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const onOverviewChange = (event) => {
    setOverview(event.target.value);
  };

  const onRuntimeChange = (event) => {
    const data = event.target.value;
    if (/^(\d){0,30}$/g.test(data)) {
      setRuntime( parseInt(data));
    }
  };

  const closePopup = () => {
    props.closePopup();
  };

  const onReset = () => {
    setTitle("");
    setCategory([]);
    setYear("");
    setUrl("");
    setOverview("");
    setRuntime(0);
  };

  const onConfirm = () => {
    props.addMovieSubmit(
      {
        title: title,
        genres: genres,
        release_date: release_date,
        poster_path: poster_path,
        overview: overview,
        runtime: runtime,
      });
  };

  const showPopup = () => {
    return (
        <S.Back>
          <S.AddPopup>
            <S.CloseButton onClick={closePopup}>X</S.CloseButton>
            <S.Title>ADD MOVIE</S.Title>

            <S.Label>TITLE</S.Label>
            <S.Input value={title} onChange={onTitleChange} />

            <S.Label>RELEASE DATE</S.Label>
            <S.Input value={release_date} onChange={onYearChange} />

            <S.Label>MOVIE URL</S.Label>
            <S.TextArea value={poster_path} onChange={onUrlChange} />

            <S.Label>GENRE</S.Label>
            <MultiSelect
              onCategoryChange={onCategoryChange}
              selected={genres}
            />

            <S.Label>OVERVIEW</S.Label>
            <S.TextArea
              value={overview}
              onChange={onOverviewChange}
            />

            <S.Label>RUNTIME</S.Label>
            <S.Input
              value={runtime}
              onChange={onRuntimeChange}
            />

            <S.Buttons>
              <S.ConfirmButton onClick={onConfirm}>SUBMIT</S.ConfirmButton>
              <S.ResetButton onClick={onReset}>RESET</S.ResetButton>
            </S.Buttons>
          </S.AddPopup>
        </S.Back>
      )
  };

  return ReactDOM.createPortal(showPopup(), el);
};

AddFilmPopup.propTypes = {
  addMovieSubmit: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default AddFilmPopup;
