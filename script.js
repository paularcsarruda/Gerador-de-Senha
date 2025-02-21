function gerarSenha(event) {
    event.preventDefault();  // Impede o envio do formulário e o recarregamento da página.

    let caracteresInput = document.getElementById("password").value;
    let caracteres = parseInt(caracteresInput); 
    let senhaResult = document.getElementById("senha-result")

    const caracteresPossiveis = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let senhaGerada = "";

    // Gera a senha aleatória
    for (let i = 0; i < caracteres; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPossiveis.length);
        senhaGerada += caracteresPossiveis.charAt(indiceAleatorio);
    }

    // Exibe a senha gerada
    senhaResult.innerHTML = senhaGerada;
    document.getElementById("content-result").classList.remove("hide");
}