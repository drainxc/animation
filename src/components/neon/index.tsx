import * as S from "./styles";
import { Title } from "../../lib/export/data";
import { Color } from "../../lib/export/data";
import { getRandomIntInclusive } from "../../lib/function/random";

export default function Neon() {
  type colorType = {
    color1: string;
    color2: string;
    color3: string;
  };

  const randomNum = getRandomIntInclusive(0, Color.length - 1);
  const randomColor: colorType = {
    color1: Color[randomNum][0],
    color2: Color[randomNum][1],
    color3: Color[randomNum][2],
  };

  return (
    <>
      <S.MainDiv>
        {Title.map((word: string, i: number) => (
          <S.Title
            color1={randomColor.color1}
            color2={randomColor.color2}
            color3={randomColor.color3}
            style={{ animationDelay: `${Title.length * 0.2 + i * 0.1}s` }}
          >
            <S.Contents style={{ animationDelay: `${i * 0.2}s` }}>
              {word}
            </S.Contents>
          </S.Title>
        ))}
      </S.MainDiv>
    </>
  );
}
