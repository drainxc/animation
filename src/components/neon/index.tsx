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
        {Title.map((word: string, i: number) => (
          <S.Title style={{ animationDelay: `${Title.length * 0.2 + i * 0.05}s` }}>
            <S.Contents style={{ animationDelay: `${i * 0.2}s` }}>{word}</S.Contents>
          </S.Title>
        ))}
      </S.MainDiv>
    </>
  );
}
