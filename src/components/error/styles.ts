import styled from "styled-components";

export const ErrorDiv: any = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: glitchErrorPage 0.2s linear infinite;

  div {
    position: absolute;
    font-family: "Pacifico", cursive;
    width: 700px;
    font-weight: 500;
    color: #f2f2f2;
    font-size: 100px;
    text-shadow: -7px 0 1px cyan, 7px 0 1px red;
    animation-delay: 0.75s;
  }

  @keyframes glitchErrorPage {
    0% {
      transform: translate(0, 0);
    }

    40% {
      transform: translate(25px, 0);
    }

    90% {
      transform: translate(0, 30px);
    }
    10%,
    50%,
    30% {
      transform: translate(0, -18px);
    }
    20%,
    60%,
    70%,
    80% {
      transform: translate(-35px, 0);
    }
  }
`;

export const Bottom: any = styled.div`
  animation: glitchBottom 2.4s linear infinite;
  clip-path: polygon(0 67%, 200% 67%, 200% 200%, 0 200%);
  -webkit-clip-path: clip-path;
  mix-blend-mode: difference;

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
    12%,
    100% {
      font-family: "Rubik Glitch", cursive;
    }
  }
`;

export const Center: any = styled.div`
  animation: glitch 1.5s linear infinite;
  clip-path: polygon(0 33%, 200% 0, 200% 67%, 0 67%);
  -webkit-clip-path: clip-path;
  mix-blend-mode: multiply;

  @keyframes glitch {
    2%,
    46% {
      transform: translate(7px, 0);
    }
    4%,
    42% {
      transform: translate(-7px, 0);
    }
    44% {
      transform: translate(0, 0);
    }
    72% {
      font-family: "Henny Penny", cursive;
    }
    24%,
    100% {
      font-family: "Rubik Glitch", cursive;
    }
  }
`;

export const Top: any = styled.div`
  animation: glitchTop 2s linear infinite;
  clip-path: polygon(0 0, 200% 0, 200% 33%, 0 33%);
  -webkit-clip-path: clip-path;
  mix-blend-mode: hard-light;

  @keyframes glitchTop {
    4%,
    46% {
      transform: translate(-15px, 0);
    }
    6%,
    42% {
      transform: translate(15px, 0);
    }
    8% {
      transform: translate(-25px, 0);
    }
    44% {
      transform: translate(0px, -35px);
    }
    30%,
    72% {
      font-family: "Press Start 2P", cursive;
    }
    80%,
    100% {
      font-family: "Rubik Glitch", cursive;
    }
  }
`;

export const Title: any = styled.div`
  mix-blend-mode: normal;
  opacity: 0.5;
`;
