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

export const Title = styled.div`
  color: #f2f2f2;
  font-size: 100px;
  font-family: "Pacifico", cursive;
  font-weight: 900;
  animation: glow 1.75s linear infinite;

  @keyframes glow {
    0%,
    100% {
      text-shadow: 0 -10px 15px #FFFFFF, 0px 10px 15px #6DD5FA;
    }
    33% {
      text-shadow: 0 -10px 15px #2980B9, 0px 10px 15px #FFFFFF;
    }
    66% {
        text-shadow: 0 -10px 15px #6DD5FA, 0px 10px 15px #2980B9;
    }
  }
`;
