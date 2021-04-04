import React from "react";
import bgImage from "assets/images/search.svg";
import LogoText from "../../components/logoText/LogoText";
import * as S from "./MovieDetails.styled";
import * as PropTypes from "prop-types";

const MovieDetails = (props) => {
    const {data, closeView} = props;

  return (
    <S.MovieDetails>
      <S.TopHeader>
        <LogoText />
        <S.Close
          src={bgImage}
          onClick={closeView}
        />
      </S.TopHeader>
      <S.TopHeader>
        <S.MovieImage src={data.poster_path} onerror="https://images-na.ssl-images-amazon.com/images/I/51KkPjIAcoL._SX300_.jpg"/>
        <S.TextBlock>
          <S.MovieTitle>{data.title}</S.MovieTitle>
          <S.MovieCategory>{data.genres}</S.MovieCategory>
          <S.YearRuntime>
            <S.MovieYear>{data.release_date}</S.MovieYear>
            <S.MovieRunTime>{data.runtime}</S.MovieRunTime>
          </S.YearRuntime>
          <S.MovieDescription>{data.overview}</S.MovieDescription>
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
