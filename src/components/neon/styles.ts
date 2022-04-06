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
  animation: glow 1s ease-in-out both infinite;

  @keyframes glow {
    50% {
      text-shadow: 0 -15px 25px cyan, -15px 15px 25px yellowgreen;
    }
  }
`;
