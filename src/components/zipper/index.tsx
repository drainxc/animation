import { useState } from "react";
import * as S from "./style";

export default function Zipper() {
  const divAmount: number = 20;
  const divs: any = Array.from({ length: divAmount }, (t, i) => {
    return i;
  });
  const style = `${document.body.clientWidth / divAmount}px`;
  const [divTransfrom, setDivTransfrom] = useState("scale(1.05, 0)");
  //  const [position, setPosition] = useState("fixed");
  //  const [top, setTop] = useState(0);

  function scrollAnimation(scroll: number) {
    divs.forEach(() => {
      const start = 0;
      const end = 1550;
      const ratio = (scroll - start) / (end - start);
      const value = ratio > 1 ? 1.05 : ratio < 0 ? 0 : ratio;

      setDivTransfrom(`scale(1.05, ${value})`);
    });
  }

  onscroll = function () {
    const scroll: number = document.documentElement.scrollTop;

    // if (scroll >= 2000) {
    //   setPosition("absolute");
    //   setTop(2000);
    // } else {
    //   setPosition("fixed");
    //   setTop(0);
    // }
    scrollAnimation(scroll);
  };

  return (
    <>
      <S.BackGround>
        <S.MainDiv>
          {divs.map((item: number) => (
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
      </S.BackGround>
    </>
  );
}
