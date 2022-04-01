import * as S from "./styles";

export default function Bounce() {
  return (
    <>
      <S.Background
        width={document.body.clientWidth}
        height={document.body.clientHeight}
      >
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
