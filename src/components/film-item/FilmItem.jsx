import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./FilmItem.styled";
import EditButton from "./edit-button/EditButton";
import { Actions } from "../../utils/Categories";

const FilmItem = (props) => {
  const { id, title, category, year, url, overview, runtime } = props;
  const [isEditButtonVisible, setEditButtonVisible] = useState(false);

  const onMouseEnter = () => {
    setEditButtonVisible(true);
  };

  const onMouseLeave = () => {
    setEditButtonVisible(false);
  };

  const onEditButton = () => {
    props.editFilm({
      action: Actions.editFilm,
      data: { id, title, category, year, url, overview, runtime },
    });
  };

  const onDelete = () => {
    props.deleteFilm({ action: Actions.deleteFilm, data: id });
  };

  return (
    <S.FilmItem>
      <S.FilmImage
        image={url}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isEditButtonVisible && (
          <EditButton
            onClick={onEditButton}
            editFilm={onEditButton}
            deleteFilm={onDelete}
          />
        )}
      </S.FilmImage>
      <S.FilmData>
        <div>{title}</div>
        <S.FilmYear>{year}</S.FilmYear>
      </S.FilmData>
      <S.FilmCategory>
        {category.map((item, index) => (
          <S.Category key={index}>{item}</S.Category>
        ))}
      </S.FilmCategory>
    </S.FilmItem>
  );
};

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.array,
  year: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  editFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
};

export default FilmItem;
