import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlovalStyle = createGlobalStyle`
    ${reset};
    body {
      -webkit-user-select: none;
      -moz-user-select: none; 
      -ms-user-select: none;
      user-select: none;
      overflow-x: hidden;
    }
    body::-webkit-scrollbar {
      /* display: none; */
}
`;
export default GlovalStyle;
