import { useEffect, useState } from "react";
import { getRandomIntInclusive } from "../../lib/function/random";
import * as S from "./styles";

export default function Error() {
  const title: string = "Lee DongHyeon";
  const color = Array.from({ length: 9 }, (t, i) => {
    return {
      color: 0,
    };
  });

  const [random, setRandom] = useState<any>(color);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRandom(
        random.map(() => ({
          color: getRandomIntInclusive(0, 255),
        }))
      );
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
            color1={random[0].color}
            color2={random[1].color}
            color3={random[2].color}
          >
            {title}
          </S.Contents>
        </S.Top>
        <S.Title>
          <S.Contents
            color1={random[3].color}
            color2={random[4].color}
            color3={random[5].color}
          >
            {title}
          </S.Contents>
        </S.Title>
        <S.Bottom>
          <S.Contents
            color1={random[6].color}
            color2={random[7].color}
            color3={random[8].color}
          >
            {title}
          </S.Contents>
        </S.Bottom>
      </S.ErrorDiv>
    </>
  );
}
