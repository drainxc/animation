import * as S from "./styles";
import { Title } from "../../lib/export/data";
import { Color } from "../../lib/export/data";
import { getRandomIntInclusive } from "../../lib/function/random";

export default function Neon(): JSX.Element {
  const randomNum: number = getRandomIntInclusive(0, Color.length - 1);
  const randomColor: string[] = [
    Color[randomNum][0],
    Color[randomNum][1],
    Color[randomNum][2],
  ];

  console.log(randomColor);

  return (
    <>
      <S.MainDiv>
        {Title.map((word: string, i: number) => (
          <S.Title
            color1={randomColor[0]}
            color2={randomColor[1]}
            color3={randomColor[2]}
            style={{ animationDelay: `${Title.length * 0.2 + i * 0.2}s` }}
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
