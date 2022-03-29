import { useState } from "react";
import * as S from "./style";

export default function Zipper() {
  const spanAmount: number = 20;
  const spans: any = Array.from({ length: spanAmount }, (t, i) => {
    return i;
  });
  const style = `${document.body.clientWidth / spanAmount}px`;
  const [divTransfrom, setDivTransfrom] = useState("scale(1.05, 0)");

  function scrollAnimation(scroll: number) {
    spans.forEach(() => {
      const start = 0;
      const end = 1550;
      const ratio = (scroll - start) / (end - start);
      const value = ratio > 1 ? 1.05 : ratio < 0 ? 0 : ratio;

      setDivTransfrom(`scale(1.05, ${value})`);
    });
  }

  onscroll = function () {
    const scroll: number = document.documentElement.scrollTop;
    scrollAnimation(scroll);
  };

  return (
    <>
      <S.MainDiv>
        {spans.map((item: number) => (
          <div
            style={{
              transform: divTransfrom,
              transition: `all ${item * 0.07}s ease`,
              width: style,
              height: "100%",
              backgroundColor: "#D0D0D0",
              display: "inline-flex",
            }}
          ></div>
        ))}
      </S.MainDiv>
      <S.Title>Lee DongHyeon</S.Title>
    </>
  );
}
