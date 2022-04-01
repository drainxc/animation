import * as S from "./styles";

export default function Bounce() {
  return (
    <>
      <S.Background>
        <S.BallAnimation>
          <S.Move>
            <S.Up>
              <S.Down>
                <S.Ball></S.Ball>
              </S.Down>
            </S.Up>
          </S.Move>
        </S.BallAnimation>
        <S.Title>Lee DongHyeon</S.Title>
      </S.Background>
    </>
  );
}
