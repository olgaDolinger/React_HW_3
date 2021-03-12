import React from "react";
import bgImage from "assets/images/search.svg";
import LogoText from "../../components/logoText/LogoText";
import * as S from "./MovieDetails.styled";
import * as PropTypes from "prop-types";

const MovieDetails = (props) => {
  return (
    <S.MovieDetails>
      <S.TopHeader>
        <LogoText />
        <S.Close
          src={bgImage}
          onClick={() => {
            props.closeView();
          }}
        />
      </S.TopHeader>
      <S.TopHeader>
        <S.MovieImage src={props.data.url} />
        <S.TextBlock>
          <S.MovieTitle>{props.data.title}</S.MovieTitle>
          <S.MovieCategory>{props.data.category}</S.MovieCategory>
          <S.YearRuntime>
            <S.MovieYear>{props.data.year}</S.MovieYear>
            <S.MovieRunTime>{props.data.runtime}</S.MovieRunTime>
          </S.YearRuntime>
          <S.MovieDescription>{props.data.overview}</S.MovieDescription>
        </S.TextBlock>
      </S.TopHeader>
    </S.MovieDetails>
  );
};

MovieDetails.propTypes = {
  closeView: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default MovieDetails;
