import { BrowserRouter, Routes, Route } from "react-router-dom";
import MegaSena from "../Pages/MegaSena";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MegaSena />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
