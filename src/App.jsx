import * as React from "react";
import Header from "./header/Header";
import MainPage from "./main-page/MainPage";
import Footer from "./footer/Footer";
import * as S from "./App.styled";
import PopoutManager from "./components/popups/popupManager/PopoutManager";
import { Actions } from "./utils/Categories";
import { Films } from "./utils/Data";

class App extends React.Component {
  data = [];

  constructor(props) {
    super(props);
    this.data = Films;
    this.state = { currentPopup: "", popupData: "" };
  }

  doAction = (payload) => {
    this.setState({ currentPopup: payload.action, popupData: payload.data });
  };

  closePopup = () => {
    this.setState({ currentPopup: "" });
  };

  confirmPopup = (data) => {
    switch (data.action) {
      case Actions.addFilm: {
        console.log(data);
        const id = this.data.length;
        const newMovie = Object.assign({}, data.popupData, { id });
        this.data.push(newMovie);
        break;
      }
      case Actions.editFilm: {
        console.log(data);
        this.data[data.popupData.id] = data.popupData;
        break;
      }
      case Actions.deleteFilm: {
        const index = this.data.filter((item) => item.id == data.id);
        this.data.splice(index, 1);
        break;
      }
    }
    this.closePopup();
  };

  render() {
    return (
      <S.App>
        <S.GlobalStyle />
        <PopoutManager
          popup={this.state.currentPopup}
          data={this.state.popupData}
          closePopup={this.closePopup}
          confirmPopup={this.confirmPopup}
        />
        <Header addMovie={this.doAction} />
        <MainPage
          editFilm={this.doAction}
          deleteFilm={this.doAction}
          movies={this.data}
        />
        <Footer />
      </S.App>
    );
  }
}
export default App;
