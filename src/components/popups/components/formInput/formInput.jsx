import React from "react";
import { useField } from "formik";
import * as S from "../popupComponents.styled";

const FormInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)

  const [field, meta] = useField(props);

  return (
    <S.VerticalDiv>
      <S.Label>{label}</S.Label>

      <S.Input className="text-input" {...field} {...props} />

      {meta.touched && meta.error ? (
        <S.Error className="error">{meta.error}</S.Error>
      ) : null}
    </S.VerticalDiv>
  );
};

export default FormInput;
