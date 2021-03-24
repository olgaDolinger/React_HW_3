import React from "react";
import * as S from "./SortingMenu.styled";
import DropDown from "./drop-down/DropDown";

const SortingMenu = (params) => {
  return (
      <S.SortingMenu>
        <S.SortingMenuLabel>SORT BY</S.SortingMenuLabel>
        <DropDown sortBy={params.sortBy}/>
      </S.SortingMenu>
  );
};

export default SortingMenu;
