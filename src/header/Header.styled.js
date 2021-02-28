import styled from "styled-components";

export const Header = styled.div`
  width: 85%;
  height: 250px;
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
  width: 100%;
  display: inline-flex;
  top: 50px;
  flex-direction: row;
  justify-content: space-between;
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
  border-radius: 3px;
`;

export const HeaderMainText = styled.div`
  color: white;
  font-size: 32px;
  padding-top: 55px;
`;
