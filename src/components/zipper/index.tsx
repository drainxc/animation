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

  function showCurtainEffect(scroll: number) {
    spans.forEach(() => {
      const start = 0;
      const end = 3000;
      const ratio = (scroll - start) / (end - start);
      const value = ratio > 1 ? 1.05 : ratio < 0 ? 0 : ratio;
      console.log(value);

      setDivTransfrom(`scale(1.05, ${value})`);
    });
  }

  onscroll = function () {
    let scroll: number =
      document.documentElement.scrollTop || document.body.scrollTop;

    showCurtainEffect(scroll);
  };

  return (
    <>
      <S.MainDiv>
        {spans.map((item: any, index: number) => (
          <div
            style={{
              transform: divTransfrom,
              transition: `all ${index * 0.1}s ease`,
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
