import React, { useState } from "react";
import * as S from "./DropDown.styled";

const items = [{ title: "RELEASE DATE", param:'release_date' }, { title: "USER RATE", param: 'vote_average' }];

const DropDown = (params) => {
  const [selected, setSelected] = useState(items[0].title);

  const handleChange = (event) => {
    let selected = event.target.value;
    params.sortBy(selected)
    setSelected(selected);
  };

  return (
      <S.DropDown value={selected} onChange={handleChange}>
        <option value={items[0].param}>{items[0].title}</option>
        <option value={items[1].param}>{items[1].title}</option>
      </S.DropDown>
  );
};

export default DropDown;
