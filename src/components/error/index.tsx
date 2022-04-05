import { useEffect, useState } from "react";
import { getRandomIntInclusive } from "../../lib/function/random";
import * as S from "./styles";

export default function Error() {
  const title: string = "Lee DongHyeon";
  const font = Array.from({ length: 5 }, () => {
    return { size: 100, color: "#2222222" };
  });
  const [random, setRandom] = useState<any>(font);

  useEffect(() => {
    const id = setInterval(() => {
      setRandom(
        random.map(() => ({
          color: "#" + Math.round(Math.random() * 0xffffff).toString(16),
          size: getRandomIntInclusive(10, 150),
        }))
      );
    }, 150);
    return () => clearInterval(id);
  }, [random]);

  return (
    <>
      <S.ErrorDiv
        style={{
          background: `${random[4].color}`,
        }}
      >
        <S.Title>
          <span
            style={{
              fontSize: `${random[0].size}px`,
              background: `${random[0].color}`,
            }}
          >
            {title}
          </span>
        </S.Title>
        <S.Top>
          <span
            style={{
              fontSize: `${random[1].size}px`,
              background: `${random[1].color}`,
            }}
          >
            {title}
          </span>
        </S.Top>
        <S.Center>
          <span
            style={{
              fontSize: `${random[2].size}px`,
              background: `${random[2].color}`,
            }}
          >
            {title}
          </span>
        </S.Center>
        <S.Bottom>
          <span
            style={{
              fontSize: `${random[3].size}px`,
              background: `${random[3].color}`,
            }}
          >
            {title}
          </span>
        </S.Bottom>
      </S.ErrorDiv>
    </>
  );
}
