const regexCPF =
    /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const regexTelefone =
    /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;

const regexCEP =
    /^\d{5}-\d{3}$/;

function aplicarEstado(
    campo,
    valido,
    mensagem = ""
) {
    campo.classList.toggle(
        "campo-sucesso",
        valido
    );

    campo.classList.toggle(
        "campo-erro",
        !valido
    );

    const mensagemErro =
        document.getElementById(
            `erro-${campo.id}`
        );

    if (mensagemErro) {
        mensagemErro.textContent =
            valido ? "" : mensagem;
    }
}

export function validarCPF(campo) {
    const valido =
        regexCPF.test(campo.value);

    aplicarEstado(
        campo,
        valido,
        "Informe o CPF no formato 000.000.000-00."
    );

    return valido;
}

export function validarTelefone(campo) {
    const valido =
        regexTelefone.test(campo.value);

    aplicarEstado(
        campo,
        valido,
        "Informe o telefone no formato (11) 99999-9999."
    );

    return valido;
}

export function validarCEP(campo) {
    const valido =
        regexCEP.test(campo.value);

    aplicarEstado(
        campo,
        valido,
        "Informe o CEP no formato 00000-000."
    );

    return valido;
}

export function validarFormulario(formulario) {
    const cpf =
        formulario.querySelector("#cpf");

    const telefone =
        formulario.querySelector("#telefone");

    const cep =
        formulario.querySelector("#cep");

    const htmlValido =
        formulario.checkValidity();

    const cpfValido =
        validarCPF(cpf);

    const telefoneValido =
        validarTelefone(telefone);

    const cepValido =
        validarCEP(cep);

    return (
        htmlValido &&
        cpfValido &&
        telefoneValido &&
        cepValido
    );
}
