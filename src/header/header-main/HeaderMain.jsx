import React from "react";
import LogoText from "../../components/logoText/LogoText";
import Search from "../../components/search/Search";
import * as PropTypes from "prop-types";
import * as S from "./HeaderMain.styled";

const HeaderMain = (props) => {
  const onClick = () => {
    props.addMovieClicked();
  };

  return (
    <>
      <S.TopHeader>
        <LogoText />
        <S.ButtonAddMovie onClick={onClick}>+ ADD MOVIE</S.ButtonAddMovie>
      </S.TopHeader>

      <S.SearchHeader>
        <Search />
      </S.SearchHeader>
    </>
  );
};

HeaderMain.propTypes = {
    addMovieClicked: PropTypes.func.isRequired,
};

export default HeaderMain;
