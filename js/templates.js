const projetos = [
    {
        titulo: "Campanha de arrecadação de alimentos",
        descricao:
            "Arrecadação de alimentos não perecíveis para famílias em situação de vulnerabilidade.",
        status: "Ativa",
        classe: "badge-sucesso"
    },
    {
        titulo: "Campanha de materiais escolares",
        descricao:
            "Arrecadação de cadernos, lápis, mochilas e outros materiais escolares.",
        status: "Prioridade",
        classe: "badge-aviso"
    },
    {
        titulo: "Ações de apoio comunitário",
        descricao:
            "Atividades educativas e ações de integração entre voluntários e comunidade.",
        status: "Contínua",
        classe: "badge-destaque"
    }
];

function gerarProjetos() {
    return projetos
        .map(
            (projeto) => `
                <article class="card-projeto">
                    <span class="badge ${projeto.classe}">
                        ${projeto.status}
                    </span>

                    <h3>${projeto.titulo}</h3>

                    <p>${projeto.descricao}</p>
                </article>
            `
        )
        .join("");
}

export function templateInicio() {
    return `
        <section>
            <span class="badge badge-destaque">
                Ação em destaque
            </span>

            <h2>Transformando vidas</h2>

            <picture>
                <source
                    srcset="../imagens/banner-home.webp"
                    type="image/webp">

                <img
                    src="../imagens/banner-home.png"
                    alt="Voluntários entregando alimentos para famílias da comunidade">
            </picture>

            <p>
                Bem-vindo à ONG Projeto Social.
                Trabalhamos para promover inclusão,
                solidariedade e novas oportunidades
                para pessoas e comunidades.
            </p>
        </section>

        <section>
            <h2>Quem somos</h2>

            <p>
                Somos uma organização dedicada ao
                desenvolvimento de projetos sociais
                por meio de ações de apoio,
                educação e voluntariado.
            </p>
        </section>

        <section>
            <span class="badge badge-sucesso">
                Projetos ativos
            </span>

            <h2>Conheça nossos projetos</h2>

            <p>
                Conheça nossas campanhas, ações sociais
                e oportunidades de voluntariado.
            </p>

            <a href="#projetos" class="botao">
                Ver projetos
            </a>
        </section>
    `;
}

export function templateProjetos() {
    return `
        <section>
            <h2>Nossos projetos sociais</h2>

            <picture>
                <source
                    srcset="../imagens/projetos.webp"
                    type="image/webp">

                <img
                    src="../imagens/projetos.png"
                    alt="Voluntários participando de uma ação social na comunidade">
            </picture>

            <p>
                A ONG Projeto Social desenvolve ações
                voltadas à inclusão, educação,
                solidariedade e apoio às comunidades.
            </p>
        </section>

        <div class="alerta alerta-sucesso" role="status">
            <strong>Campanha ativa!</strong>
            Estamos recebendo doações de alimentos
            e materiais escolares.
        </div>

        <section>
            <h2>Campanhas e ações</h2>

            <div class="cards-campanhas">
                ${gerarProjetos()}
            </div>
        </section>
    `;
}

export function templateCadastro() {
    return `
        <section>
            <span class="badge badge-sucesso">
                Inscrições abertas
            </span>

            <h2>Cadastro de voluntários e colaboradores</h2>

            <picture>
                <source
                    srcset="../imagens/cadastro.webp"
                    type="image/webp">

                <img
                    src="../imagens/cadastro.png"
                    alt="Equipe de voluntários utilizando um computador">
            </picture>

            <p>
                Preencha o formulário para demonstrar
                interesse em participar das ações da ONG.
            </p>
        </section>

        <form id="form-cadastro">

            <fieldset>
                <legend>Dados pessoais</legend>

                <p>
                    <label for="nome">Nome completo:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required>
                </p>

                <p>
                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        required>
                    <span class="mensagem-erro"
                          id="erro-cpf"></span>
                </p>
            </fieldset>

            <fieldset>
                <legend>Dados de contato</legend>

                <p>
                    <label for="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required>
                </p>

                <p>
                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(11) 99999-9999"
                        required>

                    <span class="mensagem-erro"
                          id="erro-telefone"></span>
                </p>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <p>
                    <label for="cidade">Cidade:</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required>
                </p>

                <p>
                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        required>

                    <span class="mensagem-erro"
                          id="erro-cep"></span>
                </p>
            </fieldset>

            <button
                type="button"
                data-acao="abrir-modal"
                class="botao-secundario">
                Como meus dados serão utilizados?
            </button>

            <button type="submit">
                Enviar cadastro
            </button>

        </form>
    `;
}
