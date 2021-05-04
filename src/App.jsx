import React from "react";
import * as S from "./App.styled";
import AddFilmPopupContainer from "./components/popups/addFilmPopup/AddFilmPopupContainer";
import DeleteFilmPopupContainer from "./components/popups/deleteFilmPopup/deleteFilmPopupContainer";
import EditFilmPopupContainer from "./components/popups/editFilmPopup/editFilmPopupContainer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "main-page/MainPage";
import PageNotFound from "pageNotFound/PageNotFound";

const App = () => {
  return (
    <Router>
      <S.App>
        <S.GlobalStyle />
        <div id="popup" />
        <AddFilmPopupContainer />
        <DeleteFilmPopupContainer />
        <EditFilmPopupContainer />
      </S.App>

      <Switch>
        <Route path="/notImplementedYet" component={PageNotFound} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};
export default App;
