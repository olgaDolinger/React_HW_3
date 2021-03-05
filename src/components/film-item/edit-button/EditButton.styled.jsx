import styled from "styled-components";

export const EditButton = styled.img`
  width: 40px;
  height: 40px;
  float: right;
  margin: 5px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const EditMenu = styled.div`
  float: right;
  margin: 5px;
`;

export const EditMenuItem = styled.div`
  background-color: #261F2A;
  font-size: 16px;
  width: 80px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #F65261;
  }
`;
