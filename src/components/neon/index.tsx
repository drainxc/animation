import * as S from "./styles";

export default function Neon() {
  const Title: any = [
    "L",
    "E",
    "E",
    "D",
    "O",
    "N",
    "G",
    "H",
    "Y",
    "E",
    "O",
    "N",
  ];
  return (
    <>
      <S.MainDiv>
        {Title.map((res: string) => (
          <span>{res}</span>
        ))}
      </S.MainDiv>
    </>
  );
}
