export const parseInitData = (data) => {
  try {
    const films = data.data.data;
    return films;
  } catch (e) {
    return "Unknown error";
  }
};


export const deleteMovieError = (error) => {
  try {
    return error.response.data;
  } catch (e) {
    return "Unknown error";
  }
};
