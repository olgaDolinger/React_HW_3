import React from "react";
import { Formik, Form } from "formik";
import * as ReactDOM from "react-dom";
import FormInput from "../components/formInput/formInput";
import * as S from "../stylePopup.styled";
import * as D from "../components/popupComponents.styled";
import {
  validateObject,
  validateRuntime,
  validateURL,
} from "../components/helper";
import * as PropTypes from "prop-types";
import FormSelect from "../components/formSelect/formSelect";
import { Categories } from "utils/Categories";
import FormDatePicker from "../components/formDatePicker/formDatePicker";

const EditFilmPopup = (props) => {
  const el = document.getElementById("root");

  const closePopup = () => {
    props.closePopup();
  };

  const onSubmit = (values, { setSubmitting }) => {
    const payload = Object.assign(props.data, {
      id: props.data.id,
      title: values.title,
      genres: [values.genres],
      release_date: values.release_date.toISOString(),
      poster_path: values.poster_path,
      overview: values.overview,
      runtime: parseInt(values.runtime),
    });

    props.editMovieSubmit(payload);
    setSubmitting(false);
  };

  const showPopup = () => {
    return (
      <S.Back>
        <S.AddPopup>
          <S.CloseButton onClick={closePopup}>X</S.CloseButton>
          <S.Title>EDIT MOVIE</S.Title>
          <Formik
            initialValues={{
              title: props.data.title,
              release_date: new Date(props.data.release_date),
              poster_path: props.data.poster_path,
              overview: props.data.overview,
              genres: props.data.genres[0],
              runtime: props.data.runtime,
            }}
            validationSchema={validateObject}
            onSubmit={onSubmit}
          >
            <Form>
              <D.IdBlock>
                <D.Label>MOVIE ID</D.Label>
                <D.Id>{props.data.id}</D.Id>
              </D.IdBlock>

              <FormInput
                label="TITLE"
                name="title"
                type="text"
                placeholder="Title"
              />

              <FormDatePicker
                label="RELEASE DATE"
                name="release_date"
                type="text"
                placeholder="Release data"
              />

              <FormInput
                label="MOVIE URL"
                name="poster_path"
                type="text"
                validate={validateURL}
                placeholder="Movie URL"
              />

              <FormSelect label="GENRE" name="genres">
                <option value="">Select a genre</option>
                <option value={Categories.Action}>{Categories.Action}</option>
                <option value={Categories.Adventure}>
                  {Categories.Adventure}
                </option>
                <option value={Categories.Animation}>
                  {Categories.Animation}
                </option>
                <option value={Categories.Biography}>
                  {Categories.Biography}
                </option>
                <option value={Categories.Comedy}>{Categories.Comedy}</option>
                <option value={Categories.Fantasy}>{Categories.Fantasy}</option>
                <option value={Categories.Family}>{Categories.Family}</option>
                <option value={Categories.Music}>{Categories.Music}</option>
                <option value={Categories.OscarWinningFilm}>
                  {Categories.OscarWinningFilm}
                </option>
                <option value={Categories.Romance}>{Categories.Romance}</option>
                <option value={Categories.ScienceFiction}>
                  {Categories.ScienceFiction}
                </option>
              </FormSelect>

              <FormInput
                label="OVERVIEW"
                name="overview"
                type="text"
                placeholder="Overview"
              />

              <FormInput
                label="RUNTIME"
                name="runtime"
                type="text"
                validate={validateRuntime}
                placeholder="Runtime"
              />

              <S.Buttons>
                <S.ButtonReset type="submit">RESET</S.ButtonReset>
                <S.ButtonSubmit type="submit">SUBMIT</S.ButtonSubmit>
              </S.Buttons>
            </Form>
          </Formik>
        </S.AddPopup>
      </S.Back>
    );
  };

  return ReactDOM.createPortal(showPopup(), el);
};

EditFilmPopup.propTypes = {
  editMovieSubmit: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default EditFilmPopup;
