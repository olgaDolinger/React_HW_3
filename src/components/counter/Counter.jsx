import React from "react";
import * as S from "./Counter.styled";

const Counter = (props) => {
  const {numMovies} = props;

  return (
      <S.Counter>{numMovies} movies found </S.Counter>
  );
};

export default Counter;
