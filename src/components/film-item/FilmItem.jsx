import React from "react";
import PropTypes from "prop-types";
import * as S from "./FilmItem.styled";

const FilmItem = (props) => {
  const { id, name, category, year, cdCoverImage } = props;
  return (
    <S.FilmItem>
      <S.FilmImage src={cdCoverImage} />
      <div>{name}</div>
      <div>{year}</div>
      <div>
        {category.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </S.FilmItem>
  );
};

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.array,
  year: PropTypes.string.isRequired,
  cdCoverImage: PropTypes.string.isRequired,
};

export default FilmItem;
