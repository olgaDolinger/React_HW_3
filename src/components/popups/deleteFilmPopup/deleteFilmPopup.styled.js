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
`;
export const Title = styled.div`
  font-size: 18px;
  padding-top: 80px;
  padding-left: 50px;
`;
export const Message = styled.div`
  font-size: 24px;
  padding: 20px 50px 30px;
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

export const ErrorMessage = styled.div`
  display: block;
  color: red;
  padding: 40px 50px 30px;
  text-align: inherit;
`;

export const DeletePopup = styled.div`
  height: 300px;
  width: 500px;
  padding: 30px;
  background-color: #232323;
`;
