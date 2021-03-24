import React from "react";
import * as S from "./FilmCategoryMenu.styled";
import * as PropTypes from "prop-types";

const Categories = {
  ALL: "ALL",
  DOCUMENTARY: "DOCUMENTARY",
  COMEDY: "COMEDY",
  HORROR: "HORROR",
  CRIME: "CRIME",
};

const FilmCategoryMenu = (props) => {
  const genresRef = React.useRef([]);

  const onClickHandler = (event, target) => {
    event.stopPropagation();
    props.getSortedList(target.innerHTML)
  };

  return (
    <S.FilmCategoryMenu>
      {Object.keys(Categories).map((key, i) => (
        <S.FilmCategoryMenuItem
          key={key}
          ref={(el) => (genresRef.current[i] = el)}
          onClick={(event) => onClickHandler(event, genresRef.current[i])}
        >
          {Categories[key]}
        </S.FilmCategoryMenuItem>
      ))}
    </S.FilmCategoryMenu>
  );
};

FilmCategoryMenu.propTypes = {
  getSortedList: PropTypes.func.isRequired,
};

export default FilmCategoryMenu;
