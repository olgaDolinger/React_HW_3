import React, { useEffect, useState } from "react";
import MultiSelect from "../../multy-select/multy-select";
import * as PropTypes from "prop-types";
import * as S from "./editFilmPopup.styled";
import * as ReactDOM from "react-dom";

const EditFilmPopup = (props) => {
  const el = document.getElementById("root");
  const { data, onClose, onSubmit } = props;

  const [title, setTitle] = useState("");
  const [genres, setCategory] = useState([]);
  const [release_date, setYear] = useState("");
  const [poster_path, setURL] = useState("");
  const [overview, setOverview] = useState("");
  const [runtime, setRuntime] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onCategoryChange = (genres) => {
    setCategory(genres);
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
    onClose();
  };

  const onSubmitClick = () => {
    const updatedData = Object.assign(data, {
      id: data.id,
      title,
      genres,
      release_date,
      poster_path,
      overview,
      runtime,
    });
    onSubmit(updatedData);
  };

  const setInitial = () => {
    setTitle(props.data.title);
    setCategory(props.data.genres);
    setYear(props.data.release_date);
    setURL(props.data.poster_path);
    setOverview(props.data.overview);
    setRuntime(props.data.runtime);
  };

  useEffect(() => {
      setInitial();
  }, []);

  const showPopup = () => {
    return (
        <S.Back>
          <S.EditPopup>
            <S.CloseButton onClick={closePopup}>X</S.CloseButton>
            <S.Title>EDIT MOVIE</S.Title>

            <S.Label>MOVIE ID</S.Label>
            <S.Label>{data.id}</S.Label>

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
            <S.TextArea value={overview} onChange={onOverviewChange} />

            <S.Label>RUNTIME</S.Label>
            <S.Input value={runtime} onChange={onRuntimeChange} />

            <S.Buttons>
              <S.ConfirmButton onClick={onSubmitClick}>CONFIRM</S.ConfirmButton>
              <S.ResetButton onClick={setInitial}>RESET</S.ResetButton>
            </S.Buttons>
          </S.EditPopup>
        </S.Back>
      )
  };

  return ReactDOM.createPortal(showPopup(), el);
};
export default EditFilmPopup;

EditFilmPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
