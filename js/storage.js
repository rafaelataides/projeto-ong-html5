const CHAVE_USUARIO = "ongDadosUsuario";
const CHAVE_ROTA = "ongUltimaRota";

export function salvarDadosUsuario(dados) {
    localStorage.setItem(
        CHAVE_USUARIO,
        JSON.stringify(dados)
    );
}

export function recuperarDadosUsuario() {
    const dados =
        localStorage.getItem(CHAVE_USUARIO);

    if (!dados) {
        return null;
    }

    try {
        return JSON.parse(dados);
    } catch (erro) {
        console.error(
            "Erro ao recuperar dados:",
            erro
        );

        return null;
    }
}

export function salvarUltimaRota(rota) {
    localStorage.setItem(
        CHAVE_ROTA,
        rota
    );
}

export function recuperarUltimaRota() {
    return localStorage.getItem(
        CHAVE_ROTA
    );
}
