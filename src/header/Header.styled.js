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

