import React, { useMemo } from "react";
import { Categories } from "../../utils/Categories";
import * as S from "./multy-select.styled";

const categories = [
  { value: "0", label: Categories.ActionAdventure },
  { value: "1", label: Categories.Biography },
  { value: "2", label: Categories.Music },
  { value: "3", label: Categories.OscarWinningFilm },
];

const useGetSelected = (data) => {
  return useMemo(() => {
    let res = [];
    data.forEach((category) => {
      const value = categories.find((item) => {
        return item.label === category;
      });
      res.push(value);
    });
    return res;
  }, [data]);
};

const MultiSelect = (props) => {
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#232323" }),
    option: (styles, ) => {
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
    multiValue: (styles ) => {
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
  const categoriesSelected = useGetSelected(props.selected);

  const onCategoryChange = (selected) => {
    const category = [];
    selected.forEach((item) => {
      category.push(item.label);
    });
    props.onCategoryChange(category);
  };

  return (
    <S.MultiSelect
      value={categoriesSelected}
      styles={colourStyles}
      isMulti
      options={categories}
      onChange={onCategoryChange}
    />
  );
};

export default MultiSelect;
