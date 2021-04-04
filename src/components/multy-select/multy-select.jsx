import React, { useMemo } from "react";
import { Categories } from "../../utils/Categories";
import * as S from "./multy-select.styled";

const categories = [
  { value: "1", label: Categories.Action },
  { value: "2", label: Categories.Adventure},
  { value: "3", label: Categories.Animation},
  { value: "4", label: Categories.Biography },
  { value: "5", label: Categories.Comedy },
  { value: "6", label: Categories.Drama },
  { value: "7", label: Categories.Family },
  { value: "8", label: Categories.Fantasy },
  { value: "9", label: Categories.Music},
  { value: "10", label: Categories.OscarWinningFilm },
  { value: "11", label: Categories.Romance },
  { value: "12", label: Categories.ScienceFiction },
];

const useGetSelected = (data) => {
  return useMemo(() => {
    let res = [];
    data.forEach((genres) => {
      const value = categories.find((item) => {
        return item.label === genres;
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
    const genres = [];
    selected.forEach((item) => {
      genres.push(item.label);
    });
    props.onCategoryChange(genres);
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
