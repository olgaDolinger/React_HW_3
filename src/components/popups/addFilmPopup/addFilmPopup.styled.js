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
export const Input = styled.input`
  width: 400px;
  height: 30px;
  margin: 2px 25px;
  font-size: 16px;
  font-weight: normal;
  border-radius: 3px;
  background-color: #1c1c1c;
  color: white;
  border: none;
`;
export const TextArea = styled.textarea`
  width: 400px;
  height: 30px;
  margin: 2px 25px;
  font-size: 16px;
  font-weight: normal;
  border-radius: 3px;
  background-color: #1c1c1c;
  color: white;
  border: none;
`;

export const Title = styled.div`
  font-size: 24px;
  padding-top: 80px;
  padding-left: 30px;
`;
export const Label = styled.div`
  font-size: 18px;
  padding-left: 30px;
  padding-top: 20px;
`;
export const ConfirmButton = styled.div`
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
export const ResetButton = styled.div`
  width: 180px;
  padding: 10px;
  float: right;
  text-align: center;
  margin: auto 5px;
  font-size: 16px;
  background-color: #232323;
  color: #f65261;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fb6876;
  }
`;

export const Buttons = styled.div`
  padding-top: 50px;
  padding-right: 20px;
`;

export const AddPopup = styled.div`
  height: 800px;
  width: 500px;
  background-color: #232323;
`;
