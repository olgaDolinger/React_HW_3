import React from "react";
import * as S from "./multy-select.styled";
import { Categories } from "../../utils/Categories";

const MultiSelect = (props) => {
  const categories = [
    { value: "0", label: Categories.ActionAdventure },
    { value: "1", label: Categories.Biography },
    { value: "2", label: Categories.Music },
    { value: "3", label: Categories.OscarWinningFilm },
  ];

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#232323" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = data.color;
      return {
        ...styles,
        backgroundColor: "#ffffff",
        color: "#232323",
        cursor: "pointer",

        ":active": {
          ...styles[":active"],
          backgroundColor: "#c2c2c2",
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = "#FB6876";
      return {
        ...styles,
        backgroundColor: "#FB6876",
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  const getSelected = () => {
    let res = [];
    props.selected.forEach((category) => {
      const value = categories.find((item) => {
        return item.label === category;
      });
      res.push(value);
    });
    return res;
  };

  const onCategoryChange = (selected) => {
    const category = [];
    selected.forEach((item) => {
      category.push(item.label);
    });
    props.onCategoryChange(category);
  };

  return (
    <S.MultiSelect
      value={getSelected()}
      styles={colourStyles}
      isMulti
      options={categories}
      onChange={onCategoryChange}
    />
  );
};

export default MultiSelect;
