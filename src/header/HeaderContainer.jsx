import React from "react";
import HeaderMainContainer from "./header-main/HeaderMainContainer";
import MovieDetailsContainer from "./movie-details/MovieDetailsContainer";
import * as S from "./HeaderContainer.styled";
import {Route, Switch} from "react-router";

const HeaderContainer = () => {

  return (
    <S.Header>
      <Switch>
        <Route path='/film/:id' component={MovieDetailsContainer}/>
        <Route path='/' component={HeaderMainContainer}/>
      </Switch>
    </S.Header>
  );
};



export default HeaderContainer;
