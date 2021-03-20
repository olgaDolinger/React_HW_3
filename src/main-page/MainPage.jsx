import React from "react";
import * as S from "./MainPage.styled";
import FilmCategoryMenu from "../components/menu/film-category-menu/FilmCategoryMenu";
import SortingMenu from "../components/menu/sorting-menu/SortingMenu";
import Counter from "../components/counter/Counter";
import FilmItem from "../components/film-item/FilmItem";

import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import * as PropTypes from "prop-types";

const MainPage = (props) => {

  const onClick = (data) => {
      props.onMovieClick(data);
  };
  return (
    <S.MainPage>
      <FilmCategoryMenu />
      <SortingMenu />
      <Counter numMovies={props.movies.length} />
      <ErrorBoundary>
        <S.Films>
          {props.movies.map((film) => {
            return (
              <FilmItem
                key={film.id}
                id={film.id}
                title={film.title}
                year={film.year}
                category={film.category}
                url={film.url}
                overview={film.overview}
                runtime={film.runtime}
                deleteFilm={props.deleteFilm}
                editFilm={props.editFilm}
                onClick={onClick}
              />
            );
          })}
        </S.Films>
      </ErrorBoundary>
    </S.MainPage>
  );
};

MainPage.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  editFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MainPage;
