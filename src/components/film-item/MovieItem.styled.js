import styled from "styled-components";

export const FilmItem = styled.div`
  font-size: 12px;
  color: white;
  margin: 10px;
`;

export const FilmCategory = styled.div`
  display: inline-flex;
`;

export const Category = styled.div`
  margin: 0 5px 0 0;
`;

export const FilmYear = styled.div`
  cursor: pointer;
  border: 1px solid white;
  border-radius: 3px;
  padding: 3px 6px;
`;

export const FilmData = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilmImage = styled.div`
  width: 300px;
  height: 400px;
  background-image: url(${(props) => props.image}),
    url(https://images-na.ssl-images-amazon.com/images/I/51KkPjIAcoL._SX300_.jpg);
`;
