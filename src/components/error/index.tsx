import { useEffect, useState } from "react";
import { getRandomIntInclusive } from "../../lib/function/random";
import * as S from "./styles";
import { color } from "../../lib/export/data";

export default function Error() {
  const title: string = "Lee DongHyeon";
  const [random, setRandom] = useState<any>({
    color1: color[0],
    color2: color[0],
    color3: color[0],
    color4: color[0],
    color5: color[0],
    color6: color[0],
    color7: color[0],
    color8: color[0],
    color9: color[0],
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRandom({
        color1: getRandomIntInclusive(0, 255),
        color2: getRandomIntInclusive(0, 255),
        color3: getRandomIntInclusive(0, 255),
        color4: getRandomIntInclusive(0, 255),
        color5: getRandomIntInclusive(0, 255),
        color6: getRandomIntInclusive(0, 255),
        color7: getRandomIntInclusive(0, 255),
        color8: getRandomIntInclusive(0, 255),
        color9: getRandomIntInclusive(0, 255),
      });
    }, 300);
    return () => clearInterval(id);
  }, [random]);

  function counting() {
    setInterval(() => {
      setCount(count + 1);
    }, 300);
  }

  counting();

  return (
    <>
      <S.ErrorDiv>
        <S.Top>
          <S.Contents
            color1={random.color1}
            color2={random.color2}
            color3={random.color3}
          >
            {title}
          </S.Contents>
        </S.Top>
        <S.Title>
          <S.Contents
            color1={random.color4}
            color2={random.color5}
            color3={random.color6}
          >
            {title}
          </S.Contents>
        </S.Title>
        <S.Bottom>
          <S.Contents
            color1={random.color7}
            color2={random.color8}
            color3={random.color9}
          >
            {title}
          </S.Contents>
        </S.Bottom>
      </S.ErrorDiv>
    </>
  );
}
