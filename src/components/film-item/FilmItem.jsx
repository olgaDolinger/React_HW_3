import React, { useState } from "react";
import PropTypes from "prop-types";
import EditButton from "./edit-button/EditButton";
import { Actions } from "../../utils/Categories";
import * as S from "./FilmItem.styled";

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

  const onDelete = (event) => {

    props.deleteFilm({ action: Actions.deleteFilm, data: id });
  };

  const onClick = () => {
    props.onClick(id);
  };

  return (
    <S.FilmItem onMouseLeave={onMouseLeave}>
      {isEditButtonVisible && (
        <EditButton
          onClick={onEditButton}
          editFilm={onEditButton}
          deleteFilm={onDelete}
          onMouseOver={onMouseEnter}
        />
      )}
      <S.FilmImage
        image={url}
        onMouseOver={onMouseEnter}
        onClick={onClick}
      ></S.FilmImage>
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
