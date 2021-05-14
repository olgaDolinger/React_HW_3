import React from "react";
import { connect } from "react-redux";
import * as Actions from "store/actionCreators";
import MovieDetails from "./MovieDetails";
import { useHistory } from "react-router-dom";

const MovieDetailsContainer = (props) => {
  const { movieDetails, closeDetails } = props;
  let history = useHistory();

  const closeView = () => {
    history.push("/");
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
