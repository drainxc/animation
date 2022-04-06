import * as S from "./styles";

export default function Neon() {
  const Title: any = [
    "L",
    "e",
    "e",
    "D",
    "o",
    "n",
    "g",
    "H",
    "y",
    "e",
    "o",
    "n",
  ];
  return (
    <>
      <S.MainDiv>
        {Title.map((res: string, i: number) => (
          <S.Title style={{ animationDelay: `${i * 0.1}s` }}>{res}</S.Title>
        ))}
      </S.MainDiv>
    </>
  );
}
