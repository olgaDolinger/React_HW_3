import React from "react";
import { Formik, Form } from "formik";
import * as ReactDOM from "react-dom";
import FormInput from "../components/formInput/formInput";
import * as S from "../stylePopup.styled";
import {
  validateObject,
  validateRuntime,
  validateURL,
} from "../components/helper";
import * as PropTypes from "prop-types";
import FormSelect from "../components/formSelect/formSelect";
import { Categories } from "../../../utils/Categories";
import FormDatePicker from "../components/formDatePicker/formDatePicker";

const AddFilmPopup = (props) => {
  const el = document.getElementById("root");

  const closePopup = () => {
    props.closePopup();
  };

  const onSubmit = (values, { setSubmitting }) => {
    const payload = Object.assign(values, {
      release_date:values.release_date.toISOString(),
      runtime: parseInt(values.runtime),
      genres: values.genres,
    });

    props.addMovieSubmit(payload);
    setSubmitting(false);
  };

  const showPopup = () => {
    return (
      <S.Back>
        <S.AddPopup>
          <S.CloseButton onClick={closePopup}>X</S.CloseButton>
          <S.Title>ADD MOVIE</S.Title>
          <Formik
            initialValues={{
              title: "",
              release_date: new Date(),
              poster_path: "",
              overview: "",
              genres: [],
              runtime: "0",
            }}
            validationSchema={validateObject}
            onSubmit={onSubmit}
          >
            <Form>
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

              <FormSelect label="GENRE" name="genres" multiple={true}>
                <option value="empty">Select a genre</option>
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

AddFilmPopup.propTypes = {
  addMovieSubmit: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default AddFilmPopup;
