import styled, { css } from "styled-components";

export const Background = styled.body`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #222222;
  display: flex;
`;

export const BallAnimation = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 700px;
  width: 780px;
  background-color: #d0d0d0;
  overflow: hidden;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 100px;
  color: #222222;
  font-family: "Pacifico", cursive;
`;

export const FirstName = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MiddleName = styled.div`
  position: fixed;
  top: 50%;

  animation: middle 3s linear infinite;

  @keyframes middle {
    0%,
    49%,
    60%,
    100% {
      transform: translate(-50%, calc(-50%));
    }
    53% {
      transform: translate(-50%, calc(-50% + 0.5rem));
    }
  }
`;

export const LastName = styled.div`
  position: fixed;
  top: 50%;

  animation: last 3s linear infinite;

  @keyframes last {
    0%,
    19%,
    30%,
    100% {
      transform: translate(-50%, calc(-50%));
    }
    23% {
      transform: translate(-50%, calc(-50% + 0.5rem));
    }
  }
`;

export const Move = styled.div`
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

export const Up = styled.div`
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
      transform: translateY(0);
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

export const Down = styled.div`
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

export const Ball = styled.div`
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
