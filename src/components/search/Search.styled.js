import styled from "styled-components";
import OpenSans from "../../assets/OpenSans-Regular.ttf";

export const Search = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 30px;
  font-weight: normal;
  border-radius: 3px;
  background-color: #1c1c1c;
  color: white;
  border: none;
`;

export const ButtonSearch = styled.div`
  float: right;
  background-color: #f65261;
  width: 180px;
  padding: 10px;
  color: white;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #fb6876;
  }
`;

export const HeaderMainText = styled.div`
  color: white;
  font-size: 32px;
  margin: 50px 0 0 0;
  font-family: 'Open Sans';
`;
