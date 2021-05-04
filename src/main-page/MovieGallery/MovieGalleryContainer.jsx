import React from "react";
import { connect } from "react-redux";
import MovieGallery from "./MovieGallery";
import * as Actions from "../../store/actionCreators";
import { useHistory } from "react-router-dom";

const MovieGalleryContainer = (props) => {
  const { films, getInitialData } = props;
  const history = useHistory();
  const search = history.location.pathname.split("/").pop();

  if (films.length === 0) {
    getInitialData();
  }

  const isLoaded = () => {
    return films.length > 0;
  };

  const getSortedList = (genre) => {
    getInitialData("", search, genre);
  };

  const sortBy = (sort) => {
    getInitialData(sort, search, "");
  };

  return (
    <MovieGallery
      movies={films}
      isLoaded={isLoaded()}
      getSortedList={getSortedList}
      sortBy={sortBy}
    />
  );
};

const mapStateToProps = (state) => {
  const { films } = state;
  return { films: films };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialData: (sortBy, search, filter) =>
      dispatch(Actions.getInitialData(sortBy, search, filter)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieGalleryContainer);
