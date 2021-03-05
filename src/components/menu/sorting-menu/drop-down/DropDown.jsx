import React, { useState } from "react";
import * as S from "./DropDown.styled";

const items = [{ title: "RELEASE DATE" }, { title: "USER RATE" }];

const DropDown = () => {
  const [selected, setSelected] = useState(items[0].title);

  const handleChange = (event) => {
    let selected = event.target.value;
    setSelected(selected);
  };

  return (
      <S.DropDown value={selected} onChange={handleChange}>
        <option value={items[0].title}>{items[0].title}</option>
        <option value={items[1].title}>{items[1].title}</option>
      </S.DropDown>
  );
};

export default DropDown;
