import styled from "styled-components";

export const Background: any = styled.body`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #222222;
  display: flex;
`;

export const BallAnimation: any = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 700px;
  width: 780px;
  background-color: #D0D0D0;
  overflow: hidden;
`;

export const Title: any = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "Pacifico", cursive;
  font-weight: 500;
  font-size: 100px;
  color: #222222;
`;

export const Move: any = styled.div`
  /* background-color: blue; */
  position: absolute;
  height: 75px;
  width: 75px;
  right: 20%;
  top: 36%;
  animation: move 3s ease-in-out infinite;

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-650px);
    }
  } // 왼쪽으로 650px만큼 움직이기
`;

export const Up: any = styled.div`
  /* background-color: green; */
  position: absolute;
  height: 75px;
  width: 75px;
  right: 0;
  bottom: 0;

  animation: up 3s cubic-bezier(0, 0, 0.4, 1) infinite;

  @keyframes up {
    0%,
    20% {
      transform: translateY(0rem);
    }
    35%,
    50% {
      transform: translateY(-15rem);
    }
    66% {
      transform: translateY(-24rem);
    }
    88%,
    100% {
      transform: translateY(-27rem);
    }
  } // 시간에 따라 위로 점프하기
`;

export const Down: any = styled.div`
  /* background-color: yellow; */
  position: absolute;
  height: 75px;
  width: 75px;
  right: 0;
  bottom: 0;

  animation: down 3s cubic-bezier(0.4, 0, 1, 1) infinite;

  @keyframes down {
    0% {
      transform: translateY(-30rem);
    }
    20%,
    35% {
      transform: translateY(0);
    }
    50%,
    65% {
      transform: translateY(15rem);
    }
    88%,
    100% {
      transform: translateY(45rem);
    }
  } // 점프한 후 떨어지기
`;

export const Ball: any = styled.div`
  border-radius: 50%;
  background-color: #222222;
  position: absolute;
  height: 75px;
  width: 75px;
  right: 0;
  bottom: 0;

  animation: ball 3s infinite;

  @keyframes ball {
    0%,
    19%,
    25%,
    49%,
    55%,
    79%,
    85%,
    100% {
      transform: scale(1);
    } // 납작해진 후 다시 펴지기
    20%,
    50% {
      transform: scale(1.2, 0.7);
    }
    23%,
    53% {
      transform: scale(1.1, 0.8);
    } // 떨어진 직후에 공 납작해지기
  }
`;
