import styled from "styled-components";

export const Label = styled.label`
  font-size: 18px;
  padding-left: 30px;
  padding-top: 20px;
  color: #f65261;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  margin: 2px 25px;
  font-size: 16px;
  font-weight: normal;
  border-radius: 3px;
  background-color: #424242;
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
  background-color: #424242;
  color: white;
  border: none;
`;

export const DropDown = styled.select`
  width: 400px;
  height: 46px;
  color: white;
  line-height: 46px;
  background-color: #2a2a2a;
  border-style: none;
  margin: 2px 25px;
`;

export const VerticalDiv = styled.div`
  display: grid;

  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0 25px;
  }

  input[type="text"] {
    height: 35px;
    background-color: #424242;
    color: white;
    border-style: none;
    border-radius: 3px;
    width: 400px;
  }

  .react-datepicker-popper {
    position: absolute;
    will-change: transform;
    top: 0px;
    transform: translate3d(179px, 352px, 0px);
  }
`;

export const Error = styled.div`
  color: #ff0000;
  padding: 0 25px;
`;

export const IdBlock = styled.div`
  display: inline-grid;
`;

export const Id = styled.div`
  font-size: 18px;
  padding-left: 30px;
`;
