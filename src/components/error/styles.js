import styled from "styled-components";

export const ErrorDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;

  div {
    position: absolute;
    font-family: "Pacifico", cursive;
    width: 700px;
    font-weight: 500;
    font-size: 100px;
    color: #222222;
    text-shadow: -6px 0 1px cyan, 6px 0 1px red;
  }
`;

export const Bottom = styled.div`
  animation: glitchBottom 1.4s linear infinite;
  clip-path: polygon(0 67%, 200% 67%, 200% 200%, 0 200%);
  -webkit-clip-path: polygon(0 67%, 200% 67%, 200% 200%, -100% 200%);

  @keyframes glitchBottom {
    2%,
    46% {
      transform: translate(-3px, 0);
    }
    4%,
    42% {
      transform: translate(-3px, 0);
    }
    44% {
      transform: translate(-26px, 4px);
    }
  }
`;

export const Title = styled.div`
  animation: glitch 1s linear infinite;
  clip-path: polygon(0 33%, 200% 0, 200% 67%, 0 67%);
  -webkit-clip-path: polygon(0 33%, 200% 0, 200% 67%, 0 67%);

  @keyframes glitch {
    2%,
    46% {
      transform: translate(2px, 0);
    }
    4%,
    42% {
      transform: translate(-2px, 0);
    }
    44% {
      transform: translate(0, 0);
    }
  }
`;

export const Top = styled.div`
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 200% 0, 200% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 200% 0, 200% 33%, 0 33%);

  @keyframes glitchTop {
    0%,
    48% {
      transform: translate(-3px, 0);
    }
    6%,
    42% {
      transform: translate(3px, 0);
    }
    8% {
      transform: translate(-5px, 0);
    }
    44% {
      transform: translate(22px, -7px);
    }
  }
`;
