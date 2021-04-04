import React, { useState } from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import * as S from "../popupComponents.styled";
import "react-datepicker/dist/react-datepicker.css";

const FormDatePicker = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [startDate, setStartDate] = useState(field.value);

  const test = React.useRef();

  const dateSelect = (date) => {
    setStartDate(date);
  };

  return (
    <S.VerticalDiv>
      <S.Label htmlFor={props.id || props.name} {...field} {...props}>
        {label}
      </S.Label>

      <DatePicker
        ref={test}
        className={props.name}
        selected={startDate}
        onChange={dateSelect}
      ></DatePicker>
    </S.VerticalDiv>
  );
};

export default FormDatePicker;
