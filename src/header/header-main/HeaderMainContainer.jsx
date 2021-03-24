import React from "react";
import { connect } from "react-redux";
import HeaderMain from "./HeaderMain";
import * as Actions from "store/actionCreators";

const HeaderMainContainer = (props) => {

  const addMovieClicked = () => {
    props.showPopup();
  };

  return <HeaderMain addMovieClicked={addMovieClicked} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopup: () => dispatch(Actions.showAddMoviePopup()),
  };
};

export default connect(null, mapDispatchToProps)(HeaderMainContainer);
