import styled from "styled-components";

export const Header = styled.div`
  width: 85%;
  height: 280px;
  margin: 0 auto;
  background-color: #232323;
  padding: 10px;
`;

export const TopHeader = styled.div`
  width: 100%;
  display: inline-flex;
  top: 30px;
  flex-direction: row;
  justify-content: space-between;
}
`;

export const SearchHeader = styled.div`
  margin: auto 50px;
}
`;

export const ButtonAddMovie = styled.div`
  float: right;
  background-color: #555555;
  width: 180px;
  padding: 10px;
  color: #f65261;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  
  &:hover{
    background-color: #fb6876;
    color: #ffffff;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: #232323;
  padding: 10px;
  color: white;
`;

export const MovieImage = styled.img`
  width: 160px;
  height: 220px;
`;

export const MovieTitle = styled.div`
  font-size: 32px;
  padding-bottom: 5px;
`;

export const MovieCategory = styled.div`
  font-size: 18px;
  padding-bottom: 5px;
`;

export const MovieYear = styled.div`
  color: #f65261;
`;

export const MovieRunTime = styled.div`
  color: #f65261;
  padding-left: 100px;
  padding-bottom: 5px;
`;

export const MovieDescription = styled.div``;

export const Close = styled.div``;

export const YearRuntime = styled.div`
  display: flex;
`;

export const TextBlock = styled.div`
  padding: 10px;
`;
