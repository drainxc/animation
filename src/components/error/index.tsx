import { useEffect, useState } from "react";
import { getRandomIntInclusive } from "../../lib/function/random";
import * as S from "./styles";

export default function Error() {
  const font: any = Array.from({ length: 5 }, () => {
    return { size: 100, color: "#2222222" };
  });
  const [random, setRandom] = useState<any>(font);

  useEffect(() => {
    const id: any = setInterval(() => {
      setRandom(
        random.map(() => ({
          color: "#" + Math.round(Math.random() * 0xffffff).toString(16),
          size: getRandomIntInclusive(10, 150),
        }))
      );
    }, 150);
    return () => clearInterval(id);
  }, [random]);

  const spans: any = Array.from({ length: 4 }, (t, i) => {
    return (
      <span
        style={{
          fontSize: `${random[i].size}px`,
          background: `${random[i].color}`,
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
          background: `${random[4].color}`,
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
