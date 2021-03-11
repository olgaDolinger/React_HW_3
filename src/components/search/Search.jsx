import * as React from "react";
import * as S from "./Search.styled";

const Search = () => {
  return (
    <>
      <S.HeaderMainText>FIND YOUR MOVIE</S.HeaderMainText>
      <S.Search>
        <S.SearchInput type="text" placeholder="What do you want to watch?" />
        <S.ButtonSearch>SEARCH</S.ButtonSearch>
      </S.Search>
    </>
  );
};

export default Search;
