import React from "react";
import * as S from "./SortingMenu.styled";
import DropDown from "./drop-down/DropDown";

const Categories = {
  ALL: "ALL",
  DOCUMENTARY: "DOCUMENTARY",
  COMEDY: "COMEDY",
  HORROR: "HORROR",
  CRIME: "CRIME",
};

const SortingMenu = () => {
  return (
      <S.SortingMenu>
        <S.SortingMenuLabel>SORT BY</S.SortingMenuLabel>
        <DropDown />
      </S.SortingMenu>
  );
};

export default SortingMenu;
