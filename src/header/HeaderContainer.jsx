import React, { useEffect, useState } from "react";
import MovieDetails from "./movie-details/MovieDetails";
import HeaderMain from "./header-main/HeaderMain";
import * as S from "./HeaderContainer.styled";

const HeaderContainer = (props) => {
  const [isGlobalHeader, setIsGlobalHeader] = useState(true);

  useEffect(() => {
      setIsGlobalHeader(props.data === null);
  }, [props.data]);

  const closeView = () => {
    setIsGlobalHeader(true);
    props.closeMovieDetails();
  };

  return (
    <S.Header>
      {isGlobalHeader && <HeaderMain addMovie={props.addMovie} />}
      {!isGlobalHeader && (
        <MovieDetails data={props.data} closeView={closeView} />
      )}
    </S.Header>
  );
};

export default HeaderContainer;
