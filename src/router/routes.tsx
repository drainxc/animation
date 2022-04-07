import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bounce from "../components/bounce";
import Error from "../components/error";
import Neon from "../components/neon";
import Zipper from "../components/zipper";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bounce" element={<Bounce />} />
          <Route path="/neon" element={<Neon />} />
          <Route path="/zipper" element={<Zipper />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
