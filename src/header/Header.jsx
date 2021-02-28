import React from "react";
import * as S from "./Header.styled";
import LogoText from "../components/logoText/LogoText";
import Search from "../components/search/Search";

const Header = () => {
  return (
      <S.Header>
        <S.TopHeader>
          <LogoText />
          <S.ButtonAddMovie>+ ADD MOVIE</S.ButtonAddMovie>
        </S.TopHeader>
        <S.HeaderMainText>FIND YOUR MOVIE</S.HeaderMainText>
        <S.SearchHeader>
          <Search />
        </S.SearchHeader>
      </S.Header>
  );
};

export default Header;
