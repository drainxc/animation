import Router from "../../router/routes";
import * as S from "./styles";

export default function Bounce(): JSX.Element {
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
        <S.Title>
          <S.FirstName style={{ left: "37%" }}>Lee</S.FirstName>
          <S.MiddleName style={{ left: "47.8%" }}>Dong</S.MiddleName>
          <S.LastName style={{ left: "61%" }}>Hyeon</S.LastName>
        </S.Title>
      </S.Background>
    </>
  );
}
