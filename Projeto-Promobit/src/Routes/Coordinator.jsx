export const Home = (navigate) => {
    navigate("/");
}
export const Detail = (navigate, filmes) => {
    navigate(`/detailMovie/${filmes}`)
}
export const voltar = (navigate) => {
    navigate(-1)
}

// Home - aparecem os botões com o genero do filmes 
// Detalhes - aparecem os detalhes do da página Home filmes 
// voltar (volta uma página)