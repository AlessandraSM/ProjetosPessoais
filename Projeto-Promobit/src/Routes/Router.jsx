import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "../Pages/Movie/Movie";
import MovieDetail from "../Pages/MovieDetail/MovieDetail";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={< Movie />} />
        <Route path="/detailMovie/:filmes" element={< MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
//Criando as rotas das páginas
