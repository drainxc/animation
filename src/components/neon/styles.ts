import styled from "styled-components";

export const MainDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #222222;
`;

export const Title = styled.div<{
  color1: string;
  color2: string;
  color3: string;
}>`
  color: #f2f2f2;
  font-size: 100px;
  font-family: "Pacifico", cursive;
  font-weight: 900;
  animation: glow 1.75s linear infinite;

  @keyframes glow {
    0%,
    100% {
      text-shadow: 0 -10px 15px ${(props) => props.color1},
        0px 10px 15px ${(props) => props.color3};
    }
    33% {
      text-shadow: 0 -10px 15px ${(props) => props.color2},
        0px 10px 15px ${(props) => props.color1};
    }
    66% {
      text-shadow: 0 -10px 15px ${(props) => props.color3},
        0px 10px 15px ${(props) => props.color2};
    }
  }
`;

export const Contents = styled.div`
  animation: typing 1.2s linear;
  opacity: 0;
  animation-fill-mode: forwards;

  @keyframes typing {
    0% {
      opacity: 0;
    }
    10%,
    100% {
      opacity: 1;
    }
  }
`;
