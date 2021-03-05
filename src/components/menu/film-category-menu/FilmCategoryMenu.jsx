import React from "react";
import * as S from "./FilmCategoryMenu.styled";

const Categories = {
  ALL: "ALL",
  DOCUMENTARY: "DOCUMENTARY",
  COMEDY: "COMEDY",
  HORROR: "HORROR",
  CRIME: "CRIME",
};

const FilmCategoryMenu = () => {
  return (
      <S.FilmCategoryMenu>
        {Object.keys(Categories).map((key) => (
          <S.FilmCategoryMenuItem key={key}>{Categories[key]}</S.FilmCategoryMenuItem>
        ))}
      </S.FilmCategoryMenu>
  );
};

export default FilmCategoryMenu;
