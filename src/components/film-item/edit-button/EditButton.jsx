import React, { useState } from "react";
import * as S from "./EditButton.styled";
import bgImage from "../../../assets/images/inner-grey.svg";
import PropTypes from "prop-types";

const EditButton = (props) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const editButton = React.createRef();

  const Menu = { Edit: "Edit", Delete: "Delete" };

  const onEditButtonClickHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  const onClickHandler = (event) => {
    const selected = editButton.current.innerHTML;
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
          {Object.keys(Menu).map((item) => (
            <S.EditMenuItem
              ref={editButton}
              key={item}
              onClick={onClickHandler}
            >
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
