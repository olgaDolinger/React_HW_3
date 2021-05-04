import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import EditButton from "./edit-button/EditButton";
import * as S from "./MovieItem.styled";
import { useHistory } from "react-router-dom";

const MovieItem = (props) => {
  const { filmData } = props;
  const [isEditButtonVisible, setEditButtonVisible] = useState(false);
  const history = useHistory();

  const onMouseEnter = useCallback(() => {
    setEditButtonVisible(true);
  }, [isEditButtonVisible]);

  const onMouseLeave = useCallback(() => {
    setEditButtonVisible(false);
  }, [isEditButtonVisible]);

  const onEditButton = useCallback(() => {
    props.editFilm(filmData);
  }, [filmData]);

  const onDelete = () => {
    props.deleteFilm(filmData);
  };

  const onClick = useCallback(() => {
    props.onClick(filmData);
  }, [filmData]);

  const onDataClick = () => {
    history.push("/notImplementedYet");
  };

  return (
    <S.FilmItem onMouseLeave={onMouseLeave}>
      {isEditButtonVisible && (
        <EditButton
          editFilm={onEditButton}
          deleteFilm={onDelete}
          onMouseOver={onMouseEnter}
        />
      )}
      <S.FilmImage
        image={filmData.poster_path}
        onMouseOver={onMouseEnter}
        onClick={onClick}
      ></S.FilmImage>
      <S.FilmData>
        <div>{filmData.title}</div>
        <S.FilmYear onClick={onDataClick}>{filmData.release_date}</S.FilmYear>
      </S.FilmData>
      <S.FilmCategory>
        {filmData.genres.map((item, index) => (
          <S.Category key={index}>{item}</S.Category>
        ))}
      </S.FilmCategory>
    </S.FilmItem>
  );
};

MovieItem.propTypes = {
  filmData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  editFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
};

export default MovieItem;
