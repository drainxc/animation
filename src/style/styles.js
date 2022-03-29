import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlovalStyle = createGlobalStyle`

    ${reset};
    @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 4000px;
        font-size: 2rem;
        font-family: "Pacifico", cursive;
    }
    body::-webkit-scrollbar {
      display: none;
}
`;
export default GlovalStyle;
