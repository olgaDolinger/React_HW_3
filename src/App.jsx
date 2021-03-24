import React from "react";
import HeaderContainer from "./header/HeaderContainer";
import Footer from "./footer/Footer";
import * as S from "./App.styled";
import AddFilmPopupContainer from "./components/popups/addFilmPopup/AddFilmPopupContainer";
import MovieGalleryContainer from "./main-page/MovieGallery/MovieGalleryContainer";
import DeleteFilmPopupContainer from "./components/popups/deleteFilmPopup/deleteFilmPopupContainer";
import EditFilmPopupContainer from "./components/popups/editFilmPopup/editFilmPopupContainer";

const App = () => {
  return (
    <S.App>
      <S.GlobalStyle />
      <div id='popup'/>
      <AddFilmPopupContainer />
      <DeleteFilmPopupContainer />
      <EditFilmPopupContainer />
      <HeaderContainer />
      <MovieGalleryContainer/>
      <Footer />
    </S.App>
  );
};
export default App;
