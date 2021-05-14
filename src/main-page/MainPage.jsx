import React from "react";
import HeaderContainer from "header/HeaderContainer";
import MovieGalleryContainer from "main-page/MovieGallery/MovieGalleryContainer";
import Footer from "footer/Footer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <MovieGalleryContainer />
      <Footer />
    </>
  );
};

export default MainPage;
