import React from "react";
import * as S from "./ErrorBoundary.styled";

function ErrorBoundary(props) {
  const ErrorText = () => {
    return (
      <S.ErrorBoundary>
        Something went wrong... We apologise and fixing issue.
      </S.ErrorBoundary>
    );
  };

  let isAllOk = props.children != undefined;

  return <>{isAllOk ? props.children : <ErrorText />}</>;
}

export default ErrorBoundary;
