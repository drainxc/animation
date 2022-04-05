import { useEffect, useState } from "react";
import { getRandomIntInclusive } from "../../lib/function/random";
import * as S from "./styles";

export default function Error() {
  const font: any = Array.from({ length: 4 }, () => {
    return { size: 100, color: "#2222222", letterSpacing: "0px" };
  });
  const [random, setRandom] = useState<any>(font);
  const [bgColor, setBgColor] = useState<string>("#ffffff");

  useEffect(() => {
    const id: any = setInterval(() => {
      setRandom(
        random.map(() => ({
          color: "#" + Math.round(Math.random() * 0xffffff).toString(16),
          size: getRandomIntInclusive(10, 150),
          letterSpacing: `${getRandomIntInclusive(-100, 100)}` + "px",
        }))
      );
    }, 150);
    const backGroundColor: any = setInterval(() => {
      setBgColor("#" + Math.round(Math.random() * 0xffffff).toString(16));
    }, 80);
    return () => {
      clearInterval(id);
      clearInterval(backGroundColor);
    };
  }, [random]);

  const spans: any = Array.from({ length: 4 }, (t, i) => {
    return (
      <span
        style={{
          fontSize: `${random[i].size}px`,
          background: `${random[i].color}`,
          letterSpacing: `${random[i].letterSpacing}`,
        }}
      >
        Lee DongHyeon
      </span>
    );
  });

  return (
    <>
      <S.ErrorDiv
        style={{
          background: `${bgColor}`,
        }}
      >
        <S.Title>{spans[0]}</S.Title>
        <S.Top>{spans[1]}</S.Top>
        <S.Center>{spans[2]}</S.Center>
        <S.Bottom>{spans[3]}</S.Bottom>
      </S.ErrorDiv>
    </>
  );
}
