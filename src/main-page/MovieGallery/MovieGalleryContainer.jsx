import React from "react";
import { connect } from "react-redux";
import MovieGallery from "./MovieGallery";
import * as Actions from "../../store/actionCreators";

const MovieGalleryContainer = (props) => {
  const { films, getInitialData } = props;

  if (films.length === 0) {
    getInitialData();
  }

  const isLoaded = () => {
    return films.length > 0;
  };

  const getSortedList = (genre) => {
    getInitialData('',genre);
  };

  const sortBy = (sort) => {
    getInitialData(sort,'');
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
    getInitialData: (sortBy, filter) =>
      dispatch(Actions.getInitialData(sortBy, filter)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieGalleryContainer);
