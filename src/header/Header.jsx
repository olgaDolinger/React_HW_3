import React from "react";
import * as S from "./Header.styled";
import LogoText from "../components/logoText/LogoText";
import Search from "../components/search/Search";
import { Actions } from "../utils/Categories";

const Header = (props) => {
  const onClick = () => {
    const payload = { action: Actions.addFilm, data: '' };
    props.addMovie(payload);
  };

  return (
    <S.Header>
      <S.TopHeader>
        <LogoText />
        <S.ButtonAddMovie onClick={onClick}>+ ADD MOVIE</S.ButtonAddMovie>
      </S.TopHeader>

      <S.SearchHeader>
        <Search />
      </S.SearchHeader>
    </S.Header>
  );
};

export default Header;
