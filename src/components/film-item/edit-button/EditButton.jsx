import React, { useState } from "react";
import * as S from "./EditButton.styled";
import bgImage from "../../../assets/images/inner-grey.svg";
import PropTypes from "prop-types";

const EditButton = (props) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const editButton = React.useRef([]);

  const Menu = { Edit: "Edit", Delete: "Delete" };

  const onEditButtonClickHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  const onClickHandler = (event, target) => {
    event.stopPropagation();

    const selected = target.innerHTML;
    if (selected.length > 0) {
      if (selected === Menu.Edit) {
        props.editFilm();
      } else if (selected === Menu.Delete) {
        props.deleteFilm();
      }
    }
  };

  return (
    <>
      {!isMenuVisible && (
        <S.EditButton src={bgImage} onClick={onEditButtonClickHandler} />
      )}
      {isMenuVisible && (
        <S.EditMenu>
          {Object.keys(Menu).map((item, i) => (
            <S.EditMenuItem key={item} ref={(el) => editButton.current[i]= el} onClick={(event) => onClickHandler(event, editButton.current[i])}>
              {item}
            </S.EditMenuItem>
          ))}
        </S.EditMenu>
      )}
    </>
  );
};

EditButton.propTypes = {
  editFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
};
export default EditButton;
