import styled from "styled-components";

export const Back = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  float: right;
  font-size: 16px;
`;

export const Title = styled.div`
  font-size: 24px;
  padding-top: 80px;
  padding-left: 30px;
`;

export const Buttons = styled.div`
  padding-top: 50px;
  float: right;
  margin: 0 70px;
`;

export const ButtonSubmit = styled.button`
  background-color: #f65261;
  color: white;
  width: 180px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
  border-style: none;
  cursor: pointer;

  &:hover {
    background-color: #fb6876;
  }
`;

export const ButtonReset = styled.button`
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

export const AddPopup = styled.div`
  height: 800px;
  width: 500px;
  background-color: #232323;
`;
