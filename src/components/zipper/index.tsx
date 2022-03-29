import { useState } from "react";
import * as S from "./style";

export default function Zipper() {
  const spanAmount: number = 20;
  const spans: any = Array.from({ length: spanAmount }, () => {
    return "";
  })
  const style = `${document.body.clientWidth / spanAmount}px`;

  return (
    <>
      <S.MainDiv>
        {spans.map(() => (
          <div
            style={{
              width: style,
              height: "100%",
              backgroundColor: "#D0D0D0",
              display: "inline-flex",
            }}
          ></div>
        ))}
      </S.MainDiv>
      <S.Title>SCROLL</S.Title>
    </>
  );
}
