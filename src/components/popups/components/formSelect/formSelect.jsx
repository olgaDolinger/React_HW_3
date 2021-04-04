import React from "react";
import { useField } from "formik";
import * as D from "../popupComponents.styled";

const FormSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <D.VerticalDiv>
      <D.Label htmlFor={props.id || props.name}>{label}</D.Label>

      <D.DropDown {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </D.VerticalDiv>
  );
};

export default FormSelect;
