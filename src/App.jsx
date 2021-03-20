import React, { useState, useMemo } from "react";
import HeaderContainer from "./header/HeaderContainer";
import MainPage from "./main-page/MainPage";
import Footer from "./footer/Footer";
import PopoutManager from "./components/popups/popupManager/PopoutManager";
import { Actions } from "./utils/Categories";
import { Films } from "./utils/Data";
import * as S from "./App.styled";

const App = () => {
  let films = Films;

  const [currentPopup, setCurrentPopup] = useState("");
  const [popupData, setPopupData] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const doAction = (payload) => {
    setCurrentPopup(payload.action);
    setPopupData(payload.data);
  };

  const closePopup = () => {
    setCurrentPopup("");
  };

  const confirmPopup = (payload) => {
    switch (payload.action) {
      case Actions.addFilm: {
        const id = films.length;
        const newMovie = Object.assign({}, payload.popupData, { id });
        films.push(newMovie);
        break;
      }
      case Actions.editFilm: {
        films[payload.popupData.id] = payload.popupData;
        break;
      }
      case Actions.deleteFilm: {
        if (payload.popupData === selectedMovieId) {
          setSelectedMovieId(null);
        }
        const index = films.findIndex((item) => item.id === payload.popupData);
        films.splice(index, 1);
        break;
      }
    }
    closePopup();
  };

  const onMovieClick = (id) => {
    setSelectedMovieId(id);
  };

  const movieData = useMemo(() => {
    if (selectedMovieId != null) {
      return films.find((item) => item.id === selectedMovieId);
    } else return null;
  }, [selectedMovieId, films]);

  const closeMovieDetails = () => {
    setSelectedMovieId(null);
  };

  return (
    <S.App>
      <S.GlobalStyle />
      <PopoutManager
        popup={currentPopup}
        data={popupData}
        closePopup={closePopup}
        confirmPopup={confirmPopup}
      />
      <HeaderContainer
        addMovie={doAction}
        data={movieData}
        closeMovieDetails={closeMovieDetails}
      />
      <MainPage
        editFilm={doAction}
        deleteFilm={doAction}
        movies={films}
        onMovieClick={onMovieClick}
      />
      <Footer />
    </S.App>
  );
};
export default App;
