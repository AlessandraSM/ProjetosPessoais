export const irParaDetalhes = (navigate, pokemon) => {
    navigate(`/detalheDoPokemon/${pokemon}`)
}

export const irParaPokedex = (navigate) => {
    navigate("/Pokedex");
};

export const irParaHome = (navigate) => {
    navigate("/");
}

export const voltar = (navigate) => {
    navigate(-1)
}

