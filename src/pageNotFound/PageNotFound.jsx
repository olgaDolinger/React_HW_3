import React from "react";
import bgImage from "assets/images/404.png";
import * as S from "./PageNotFound.styled";
import LogoText from "components/logoText/LogoText";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };

  return (
    <>
      <LogoText />
      <S.PageNotFound>
        <div>
          Page not found
          <S.Image src={bgImage} />
          <S.Button onClick={onClick}>GO BACK HOME</S.Button>
        </div>
      </S.PageNotFound>
    </>
  );
};

export default PageNotFound;
