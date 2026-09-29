import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

import {
    salvarUltimaRota
} from "./storage.js";

const rotas = {
    inicio: templateInicio,
    projetos: templateProjetos,
    cadastro: templateCadastro
};

export function renderizarPagina() {
    const app =
        document.getElementById("app");

    const rota =
        window.location.hash
            .replace("#", "") ||
        "inicio";

    const template =
        rotas[rota] ||
        templateInicio;

    app.innerHTML = "";

    app.innerHTML = template();

    salvarUltimaRota(
        `#${rota}`
    );
}
