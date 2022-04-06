import styled from "styled-components";

export const MainDiv = styled.div<{ position?: string; top?: number }>`
  position: ${(props) => props.position || "fixed"};
  z-index: -1;
  left: 0;
  top: ${(props) => props.top || 0};
  width: 100%;
  height: 100%;
  background-color: #222222;
  display: flex;
`;

export const BackGround = styled.body`
  width: 100%;
  height: 2500px;
`;

export const Title = styled.p<{ position?: string; top?: number }>`
  position: ${(props) => props.position || "fixed"};
  left: 50%;
  top: ${(props) => props.top || "50%"};
  transform: translate(-50%, -50%);
  font-size: 100px;
  font-family: "Pacifico", cursive;
  font-weight: 500;
  mix-blend-mode: difference;
  color: #f2f2f2;
  text-align: center;
  line-height: 1.3;
`;
