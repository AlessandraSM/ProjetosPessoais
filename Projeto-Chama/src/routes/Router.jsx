import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Chama from '../Pages/chama/Chama'
import ChamaDetail from '../Pages/chamaDetail/ChamaDetail';

export const Router = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={ < Chama/>} />
            <Route path="ChamaDetail" element={ < ChamaDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
};