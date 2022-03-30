import styled from "styled-components";

export const BackGround = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 700px;
  width: 800px;
  background-color: grey;
`;

export const Title = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "Pacifico", cursive;
  font-size: 100px;
`;

export const Move = styled.div`
  background-color: blue;
  position: absolute;
  height: 75px;
  width: 75px;
  right: 0;
  bottom: 0;
  animation: move 3s ease-in-out infinite;

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-800px);
    }
  }
`;

export const Up = styled.div`
  background-color: green;
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
    65%,
    80% {
      transform: translateY(-25rem);
    }
    90%,
    100% {
      transform: translateY(-27rem);
    }
  }
`;

export const Down = styled.div`
  background-color: yellow;
  position: absolute;
  height: 75px;
  width: 75px;
  right: 0;
  bottom: 0;

  animation: down 3s cubic-bezier(0.4, 0, 1, 1) infinite;

  @keyframes down {
    0% {
      transform: translateY(-25rem);
    }
    20%,
    35% {
      transform: translateY(0);
    }
    50%,
    65% {
      transform: translateY(15rem);
    }
    80%,
    95% {
      transform: translateY(25rem);
    }
    100% {
      transform: translateY(15rem);
    }
  }
`;
