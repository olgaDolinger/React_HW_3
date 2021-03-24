import React, { useMemo } from "react";
import FilmCategoryMenu from "components/menu/film-category-menu/FilmCategoryMenu";
import SortingMenu from "components/menu/sorting-menu/SortingMenu";
import Counter from "components/counter/Counter";
import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import * as S from "./MovieGallery.styled";
import * as PropTypes from "prop-types";
import MovieItemContainer from "../../components/film-item/MovieItemContainer";

const MovieGallery = (props) =>
  useMemo(() => {
    const { movies, isLoaded } = props;

    return (
      <>
        <S.MainPage>
          <FilmCategoryMenu getSortedList={props.getSortedList}/>
          <SortingMenu sortBy={props.sortBy}/>
          <Counter numMovies={movies.length} />
          <ErrorBoundary>
            <S.Films>
              {isLoaded &&
                movies.map((film) => {
                  return (
                    <MovieItemContainer
                      key={`movie-key-${film.id}`}
                      filmData={film}
                    />
                  );
                })}
              {!isLoaded && <div>LOADING</div>}
            </S.Films>
          </ErrorBoundary>
        </S.MainPage>
      </>
    );
  }, [props.movies, props.isLoaded]);

MovieGallery.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieGallery;
