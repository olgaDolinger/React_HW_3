import styled from "styled-components";

export const PageNotFound = styled.div`
  color: white;
  font-size: 25px;
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  background-color: #232323;
`;

export const Image = styled.img`
  display: flex;
`;

export const Button = styled.button`
  background-color: #232323;
  color: #f65261;
  width: 180px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid;
  cursor: pointer;

  &:hover {
    background-color: #332728;
  }
`;