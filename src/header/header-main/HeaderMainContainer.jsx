import React from "react";
import { connect } from "react-redux";
import HeaderMain from "./HeaderMain";
import * as Actions from "store/actionCreators";
import {useHistory} from "react-router-dom";

const HeaderMainContainer = (props) => {
  const history = useHistory();

  const addMovieClicked = () => {
    props.showPopup();
  };

  const onSearch = (data) => {
    history.push(``);
    history.push(`search/${data}`);
    props.search(data);
  };

  return <HeaderMain addMovieClicked={addMovieClicked} onSearch={onSearch}/>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopup: () => dispatch(Actions.showAddMoviePopup()),
    search: (data) => dispatch(Actions.getInitialData("",data)),
  };
};

export default connect(null, mapDispatchToProps)(HeaderMainContainer);
