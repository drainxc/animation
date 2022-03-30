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
