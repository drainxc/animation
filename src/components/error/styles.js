import styled from "styled-components";

export const ErrorDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #222222;

  div {
    position: absolute;
    font-family: "Pacifico", cursive;
    width: 700px;
    font-weight: 500;
    font-size: 100px;
    color: #f2f2f2;
    text-shadow: -7px 0 1px cyan, 7px 0 1px red;
  }
`;

export const Glitch = styled.div``;

export const Bottom = styled.div`
  animation: glitchBottom 2.4s linear infinite;
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
    72% {
      font-family: "Press Start 2P", cursive;
    }
    100% {
      font-family: "Rubik Glitch", cursive;
    }
  }
`;

export const Title = styled.div`
  animation: glitch 2.2s linear infinite;
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
    72% {
      font-family: "Henny Penny", cursive;
    }
    100% {
      font-family: "Rubik Glitch", cursive;
    }
  }
`;

export const Top = styled.div`
  animation: glitchTop 2s linear infinite;
  clip-path: polygon(0 0, 200% 0, 200% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 200% 0, 200% 33%, 0 33%);

  @keyframes glitchTop {
    4%,
    46% {
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
      transform: translate(0px, -7px);
    }
    72% {
      font-family: "Press Start 2P", cursive;
    }
    100% {
      font-family: "Rubik Glitch", cursive;
    }
  }
`;
