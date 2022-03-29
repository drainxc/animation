import { useState } from "react";
import * as S from "./style";

export default function Zipper() {
  const spanAmount: number = 20;
  const spans: any = Array.from({ length: spanAmount }, () => {
    return "";
  })
  const style = `${document.body.clientWidth / spanAmount}px`;
  const [divTransfrom, setDivTransfrom] = useState("scale(1.05, 0)");

  for (let i = 0; i < spanAmount; i++) {}

  function showCurtainEffect(end: number, start: number, scroll: number) {
    const gap = (end - start) / spanAmount;

    spans.forEach((i: number) => {
      const s = start + gap * i;
      const e = s + gap * 10;
      const ratio = (scroll - s) / (e - s);
      const value = ratio > 1 ? 1.05 : ratio < 0 ? 0 : ratio;

      setDivTransfrom(`scale(1.05, ${value})`);
    });
  }

  onscroll = function () {
    let scroll: number =
      document.documentElement.scrollTop || document.body.scrollTop;

    showCurtainEffect(0, 3000, scroll);
  };

  return (
    <>
      <S.MainDiv>
        {spans.map(() => (
          <div
            style={{
              transform: divTransfrom,
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
