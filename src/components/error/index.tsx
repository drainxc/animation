import { useState } from "react";
import { getRandomIntInclusive } from "../../lib/function/random";
import * as S from "./styles";
import { color } from "../../lib/export/data";

export default function Error() {
  const title: string = "Lee DongHyeon";
  const [color1, setColor1] = useState(color[0]);
  const [color2, setColor2] = useState(color[0]);
  const [color3, setColor3] = useState(color[0]);
  setInterval(() => {
    setColor1(color[getRandomIntInclusive(0, color.length - 1)]);
    setColor2(color[getRandomIntInclusive(0, color.length - 1)]);
    setColor3(color[getRandomIntInclusive(0, color.length - 1)]);
  }, 1000);

  return (
    <>
      <S.ErrorDiv>
        <S.Top>{title}</S.Top>
        <S.Title>
          <S.TitleContents color1={color1} color2={color2} color3={color3}>
            {title}
          </S.TitleContents>
        </S.Title>
        <S.Bottom>{title}</S.Bottom>
      </S.ErrorDiv>
    </>
  );
}
