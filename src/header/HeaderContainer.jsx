import React from "react";
import { connect } from "react-redux";
import HeaderMainContainer from "./header-main/HeaderMainContainer";
import MovieDetailsContainer from "./movie-details/MovieDetailsContainer";
import * as S from "./HeaderContainer.styled";

const HeaderContainer = (props) => {
  const { isDetailsView } = props;

  const closeView = () => {
    console.log("closeView Details");
  };

  return (
    <S.Header>
      {!isDetailsView && <HeaderMainContainer />}
      {isDetailsView && <MovieDetailsContainer />}
    </S.Header>
  );
};

const mapStateToProps = (state) => {
  const { headerView } = state;
  const isDetailsView = headerView.isDetailsView;
  return { isDetailsView };
};

export default connect(mapStateToProps)(HeaderContainer);
