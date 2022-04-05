import { useState } from "react";
import { zipperScroll } from "../../lib/function/zipperAnimation";
import * as S from "./style";

export default function Zipper() {
  const divAmount: number = 20; // div 개수
  const divs: any = Array.from({ length: divAmount }, (t, i) => {
    return i;
  }); // map함수용 div 배열 생성
  const style: string = `${document.body.clientWidth / divAmount}px`; // div 가로 크기 조정
  const [divTransfrom, setDivTransfrom] = useState<string>("scale(1.05, 0)");
  //  const [position, setPosition] = useState("fixed");
  //  const [top, setTop] = useState(0);``````

  onscroll = function () {
    const scroll: number = document.documentElement.scrollTop; // 스크롤 감지

    // if (scroll >= 2000) {
    //   setPosition("absolute");
    //   setTop(2000);
    // } else {
    //   setPosition("fixed");
    //   setTop(0);
    // }
    divs.forEach(() => {
      setDivTransfrom(`scale(1.05, ${zipperScroll(scroll)})`); // 스크롤 시 div 세로 크기 조정
    });
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
            ></div> // 애니메이션
          ))}
        </S.MainDiv>
        <S.Title>Lee DongHyeon</S.Title>
      </S.BackGround>
    </>
  );
}
