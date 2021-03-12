import React, { useCallback, useState } from "react";
import { Actions } from "utils/Categories";
import MultiSelect from "../../multy-select/multy-select";
import * as PropTypes from "prop-types";
import * as S from "./editFilmPopup.styled";

const EditFilmPopup = (props) => {
  const [title, setTitle] = useState(props.data.title);
  const [category, setCategory] = useState(props.data.category);
  const [year, setYear] = useState(props.data.year);
  const [url, setURL] = useState(props.data.url);
  const [overview, setOverview] = useState(props.data.overview);
  const [runtime, setRuntime] = useState(props.data.runtime);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onCategoryChange = (category) => {
    setCategory(category);
  };

  const onYearChange = (event) => {
    setYear(event.target.value);
  };

  const onUrlChange = (event) => {
    setURL(event.target.value);
  };

  const onOverviewChange = (event) => {
    setOverview(event.target.value);
  };

  const onRuntimeChange = (event) => {
    setRuntime(event.target.value);
  };

  const closePopup = () => {
    props.close();
  };

  const onReset = () => {
    setTitle(props.data.title);
    setCategory(props.data.category);
    setYear(props.data.year);
    setURL(props.data.url);
    setOverview(props.data.overview);
    setRuntime(props.data.runtime);
  };

  const onConfirm = () => {
    props.confirmPopup(getData());
  };

  const getData = useCallback(() => {
    return {
      action: Actions.editFilm,
      popupData: {
        id: props.data.id,
        title,
        category,
        year,
        url,
        overview,
        runtime,
      },
    };
  }, [title, category, year, url, overview, runtime]);

  return (
    <S.Back>
      <S.EditPopup>
        <S.CloseButton onClick={closePopup}>X</S.CloseButton>
        <S.Title>EDIT MOVIE</S.Title>

        <S.Label>MOVIE ID</S.Label>
        <S.Label>{props.data.id}</S.Label>

        <S.Label>TITLE</S.Label>
        <S.Input value={title} onChange={onTitleChange} />

        <S.Label>RELEASE DATE</S.Label>
        <S.Input value={year} onChange={onYearChange} />

        <S.Label>MOVIE URL</S.Label>
        <S.TextArea value={url} onChange={onUrlChange} />

        <S.Label>GENRE</S.Label>
        <MultiSelect onCategoryChange={onCategoryChange} selected={category} />

        <S.Label>OVERVIEW</S.Label>
        <S.TextArea value={overview} onChange={onOverviewChange} />

        <S.Label>RUNTIME</S.Label>
        <S.Input value={runtime} onChange={onRuntimeChange} />

        <S.Buttons>
          <S.ConfirmButton onClick={onConfirm}>CONFIRM</S.ConfirmButton>
          <S.ResetButton onClick={onReset}>RESET</S.ResetButton>
        </S.Buttons>
      </S.EditPopup>
    </S.Back>
  );
};

EditFilmPopup.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default EditFilmPopup;
