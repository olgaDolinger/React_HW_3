import React from "react";
import * as S from "./MainPage.styled";
import FilmCategoryMenu from "../components/menu/film-category-menu/FilmCategoryMenu";
import SortingMenu from "../components/menu/sorting-menu/SortingMenu";
import Counter from "../components/counter/Counter";
import FilmItem from "../components/film-item/FilmItem";

import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

export const Categories = {
  ActionAdventure: "Action & Adventure",
  Drama: "Drama",
  Biography: "Biography",
  Music: "Music",
  OscarWinningFilm: "OscarWinningFilm",
};

const films = [
  {
    id: 0,
    name: "Pulp Fiction",
    category: [Categories.ActionAdventure],
    year: "2004",
    cdCoverImage: image1,
  },
  {
    id: 1,
    name: "Bohemian Rhapsody",
    category: [Categories.Drama, Categories.Biography, Categories.Music],
    year: "2003",
    cdCoverImage: image2,
  },
  {
    id: 2,
    name: "Bill: Vol 2",
    category: [Categories.OscarWinningFilm],
    year: "1994",
    cdCoverImage: image3,
  },
  {
    id: 3,
    name: "Avengers: War of Infinity",
    category: [Categories.ActionAdventure],
    year: "2004",
    cdCoverImage: image4,
  },
  {
    id: 4,
    name: "Inception",
    category: [Categories.ActionAdventure],
    year: "2003",
    cdCoverImage: image5,
  },
  {
    id: 5,
    name: "Reservoir dogs",
    category: [Categories.OscarWinningFilm],
    year: "1994",
    cdCoverImage: image6,
  },
];

const MainPage = () => {
  return (
      <S.MainPage>
        <FilmCategoryMenu />
        <SortingMenu />
        <Counter numMovies={39} />
        <ErrorBoundary>
          <S.Films>
            {films.map((film) => {
              return (
                <FilmItem
                  key={film.id}
                  id={film.id}
                  name={film.name}
                  year={film.year}
                  category={film.category}
                  cdCoverImage={film.cdCoverImage}
                />
              );
            })}
          </S.Films>
        </ErrorBoundary>
      </S.MainPage>
  );
};

export default MainPage;
