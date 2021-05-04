import * as React from "react";
import * as S from "./Search.styled";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const input = React.createRef();

  const onClick = () => {
    props.onSearchClick(input.current.value);
    input.current.value = "";
  };

  return (
    <>
      <S.HeaderMainText>FIND YOUR MOVIE</S.HeaderMainText>
      <S.Search>
        <S.SearchInput
          type="text"
          ref={input}
          placeholder="What do you want to watch?"
        />
        <S.ButtonSearch onClick={onClick}>SEARCH</S.ButtonSearch>
      </S.Search>
    </>
  );
};

export default Search;
