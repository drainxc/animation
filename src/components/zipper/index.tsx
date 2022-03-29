import { useState } from "react";
import * as S from "./style";

export default function Zipper() {
  const spanAmount: number = 20;
  const spans: any = Array.from({ length: spanAmount }, (t, i) => {
    return i;
  });
  const style = `${document.body.clientWidth / spanAmount}px`;
  const [divTransfrom, setDivTransfrom] = useState("scale(1.05, 0)");
  const [position, setPosition] = useState("fixed");
  const [top, setTop] = useState("0px")
  const [titleTop, setTitleTop] = useState("460px");

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

    if (scroll >= 1563) {
      setPosition("absolute");
      setTitleTop(`${1563 + 460}px`);
      setTop("1563px")
    } else {
      setPosition("fixed");
      setTitleTop("460px");
      setTop("0px");
      scrollAnimation(scroll);
    }
  };

  return (
    <>
      <S.MainDiv position={position} top={top}>
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
      <S.Title position={position} top={titleTop}>
        Lee DongHyeon
      </S.Title>
    </>
  );
}
