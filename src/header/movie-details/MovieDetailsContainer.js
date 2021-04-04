import React from "react";
import { connect } from "react-redux";
import * as Actions from "store/actionCreators";
import MovieDetails from "./MovieDetails";

const MovieDetailsContainer = (props) => {
  const { movieDetails, closeDetails } = props;

  const closeView = () => {
   closeDetails();
  };

  return <MovieDetails data={movieDetails} closeView={closeView} />;
};

const mapDispatchToProps = (dispatch) => {
  return { closeDetails: () => dispatch(Actions.hideMovieDetails()) };
};

const mapStateToProps = (state) => {
  const { headerView } = state;
  const movieDetails = headerView.movieData;
  return { movieDetails };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsContainer);
