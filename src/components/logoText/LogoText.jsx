import * as React from "react";
import * as S from "./LogoText.styled";
import { useHistory } from "react-router-dom";

const LogoText = () => {
  const history = useHistory();

  const onLogoClick = () => {
    history.push("/");
  };

  return (
    <S.Logo onClick={onLogoClick}>
      <b>netflix</b>roulette
    </S.Logo>
  );
};

export default LogoText;
