import styled from "styled-components";

export const MainDiv = styled.div`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #222222;
  display: flex;
`;

export const Title = styled.p`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(3vw, 10vw, 5rem);
  mix-blend-mode: difference;
  color: #f2f2f2;
  text-align: center;
  line-height: 1.3;
`;
