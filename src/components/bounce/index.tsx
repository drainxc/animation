import * as S from "./styles";

export default function Bounce() {
  return (
    <>
      <S.BackGround>
        <S.Move>
          <S.Up>
            <S.Down>
              <S.Ball></S.Ball>
            </S.Down>
          </S.Up>
        </S.Move>
      </S.BackGround>
      <S.Title>Lee DongHyeon</S.Title>
    </>
  );
}
