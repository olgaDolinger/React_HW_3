import * as React from "react";
import Header from "./header/Header";
import MainPage from "./main-page/MainPage";
import Footer from "./footer/Footer";
import * as S from "./App.styled";

const App = () => {
  return (
    <S.App>
      <Header />
      <MainPage />
      <Footer />
    </S.App>
  );
};
export default App;
