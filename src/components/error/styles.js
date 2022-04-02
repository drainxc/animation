import styled from "styled-components";

export const ErrorDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
`;

export const Bottom = styled.div`
  position: absolute;
  font-family: "Pacifico", cursive;
  width: 700px;
  font-weight: 500;
  font-size: 100px;
  color: #222222;
  animation: glitchBottom 1.4s linear infinite;
  clip-path: polygon(0 67%, 200% 67%, 200% 200%, 0 200%);
  -webkit-clip-path: polygon(0 67%, 200% 67%, 200% 200%, -100% 200%);

  text-shadow: -7px 0 1px cyan, 7px 0 1px red;

  @keyframes glitchBottom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-22px, 5px);
    }
  }
`;

export const Title = styled.div`
  position: absolute;
  font-family: "Pacifico", cursive;
  width: 700px;
  font-weight: 500;
  font-size: 100px;
  color: #222222;
  text-shadow: -7px 0 1.3px cyan, 7px 0 1px red;
  animation: glitch 1s linear infinite;
  clip-path: polygon(0 33%, 200% 0, 200% 67%, 0 67%);
  -webkit-clip-path: polygon(0 33%, 200% 0, 200% 67%, 0 67%);

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(0, 0);
    }
  }
`;

export const Top = styled.div`
  position: absolute;
  font-family: "Pacifico", cursive;
  width: 700px;
  font-weight: 500;
  font-size: 100px;
  color: #222222;
  text-shadow: -7px 0 1.2px cyan, 7px 0 1px red;
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 200% 0, 200% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 200% 0, 200% 33%, 0 33%);

  @keyframes glitchTop {
    0%,
    13% {
      transform: translate(-5px, -2px);
    }
    3% {
      transform: translate(5px, -2px);
    }
    10% {
      transform: translate(5px, -2px);
    }
    11% {
      transform: translate(22px, -7px);
    }
  }
`;
