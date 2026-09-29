import {
    renderizarPagina
} from "./router.js";

import {
    validarCPF,
    validarTelefone,
    validarCEP,
    validarFormulario
} from "./validacao.js";

import {
    salvarDadosUsuario,
    recuperarDadosUsuario,
    recuperarUltimaRota
} from "./storage.js";


function mostrarToast(mensagem) {
    const toast =
        document.getElementById(
            "toast-sucesso"
        );

    if (!toast) {
        return;
    }

    toast.textContent = mensagem;
    toast.hidden = false;

    requestAnimationFrame(() => {
        toast.classList.add(
            "toast-visivel"
        );
    });

    setTimeout(() => {
        toast.classList.remove(
            "toast-visivel"
        );

        setTimeout(() => {
            toast.hidden = true;
        }, 300);

    }, 4000);
}


function preencherDadosSalvos() {
    const dados =
        recuperarDadosUsuario();

    if (!dados) {
        return;
    }

    const nome =
        document.getElementById("nome");

    const email =
        document.getElementById("email");

    const cidade =
        document.getElementById("cidade");

    if (nome) {
        nome.value = dados.nome || "";
    }

    if (email) {
        email.value = dados.email || "";
    }

    if (cidade) {
        cidade.value = dados.cidade || "";
    }
}

function focarConteudoPrincipal() {
    const conteudoPrincipal =
        document.getElementById("app");

    if (conteudoPrincipal) {
        conteudoPrincipal.focus();
    }
}

function configurarPagina() {

    const cpf =
        document.getElementById("cpf");

    const telefone =
        document.getElementById(
            "telefone"
        );

    const cep =
        document.getElementById("cep");

    const formulario =
        document.getElementById(
            "form-cadastro"
        );


    cpf?.addEventListener(
        "input",
        () => validarCPF(cpf)
    );


    telefone?.addEventListener(
        "input",
        () =>
            validarTelefone(
                telefone
            )
    );


    cep?.addEventListener(
        "input",
        () => validarCEP(cep)
    );


    formulario?.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();

            if (
                !validarFormulario(
                    formulario
                )
            ) {
                formulario.reportValidity();

                return;
            }

            const dados = {
                nome:
                    formulario.nome.value,

                email:
                    formulario.email.value,

                cidade:
                    formulario.cidade.value
            };

            salvarDadosUsuario(dados);

            mostrarToast(
                "Cadastro enviado com sucesso!"
            );
        }
    );


    preencherDadosSalvos();
}


function iniciarAplicacao() {

    const ultimaRota =
        recuperarUltimaRota();

    if (
        !window.location.hash &&
        ultimaRota
    ) {
        window.location.hash =
            ultimaRota;
    }

    renderizarPagina();

    configurarPagina();
}


window.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacao
);


window.addEventListener(
    "hashchange",
    () => {

        renderizarPagina();

        configurarPagina();

        focarConteudoPrincipal();

    }
);


/* Delegação de eventos */

document.addEventListener(
    "click",
    (evento) => {

        const botao =
            evento.target.closest(
                "[data-acao]"
            );

        if (!botao) {
            return;
        }

        if (
            botao.dataset.acao ===
            "abrir-modal"
        ) {
            const modal =
                document.getElementById(
                    "modal-privacidade"
                );

            modal?.showModal();
        }


        if (
            botao.dataset.acao ===
            "fechar-modal"
        ) {
            const modal =
                document.getElementById(
                    "modal-privacidade"
                );

            modal?.close();
        }

    }
);
