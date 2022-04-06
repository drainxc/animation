import * as S from "./styles";
import { Title } from "../../lib/export/data";

export default function Neon() {
  return (
    <>
      <S.MainDiv>
        {Title.map((word: string, i: number) => (
          <S.Title
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
