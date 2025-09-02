// ATIVIDADE 01
function validarForm() {
    let data = frmRegistro.inData.value.trim();
    let nome = document.getElementById("inCli").value.trim();
    let telefone = document.getElementById("inFone").value.trim();
    let email = document.getElementById("inMail").value.trim();
    let produto = document.getElementById("inProd").value.trim();
    let quantidade = document.getElementById("inQtd").value.trim();
    let valor = document.getElementById("inVal").value.trim();

    let erroDiv = document.getElementById("erro");
    let sucessoDiv = document.getElementById("sucesso"); // Crie uma div com id="sucesso" no HTML



    // Verificar se está vazio ou inválido
    if (data === '') {
        erroDiv.style.display = 'block';
        erroDiv.innerText = "Preencha a data corretamente!";
        return false;
    }

    if (nome === '' || nome.length < 5) {
        erroDiv.style.display = "block";
        erroDiv.innerText = "O nome deve ter pelo menos 5 caracteres!";
        return false;
    }

    if (telefone === '' || telefone.length < 8) {
        erroDiv.style.display = "block";
        erroDiv.innerText = "Telefone inválido!";
        return false;
    }

    if (email === '' || email.length < 5) {
        erroDiv.style.display = "block";
        erroDiv.innerText = "Email inválido!";
        return false;
    }

    if (produto === '' || produto.length < 3) {
        erroDiv.style.display = "block";
        erroDiv.innerText = "Produto inválido!";
        return false;
    }

    if (quantidade === '' || Number(quantidade) <= 0) {
        erroDiv.style.display = "block";
        erroDiv.innerText = "Quantidade deve ser maior que 0!";
        return false;
    }

    if (valor === '' || Number(valor) <= 0) {
        erroDiv.style.display = "block";
        erroDiv.innerText = "Valor deve ser maior que 0!";
        return false;
    }

    // Se chegou aqui, tudo está correto
    sucessoDiv.style.display = "block";
    erroDiv.style.display = 'none';
    sucessoDiv.innerText = "Formulário enviado com sucesso!";
    return true;
}




// ATIVIDADE 02
function gerarImagens() {
    let div = document.getElementById('canvas');
    let numero = document.getElementById('inQtdImg').value;
    let botao = document.getElementById('btnEnviar');

    div.innerHTML = '';

    for (let i = 0; i < numero; i++) {
        let computador = '<img src="img/computador.png"></img>';
        div.innerHTML += computador
    }
}



// ATIVIDADE 03
function acenderApagar() {
    let lampada = document.getElementById("lampada");
    let botao = document.querySelector("button");

    if (lampada.src.includes("apagada.jpg")) {
        lampada.src = "img/acesa.jpg";
        botao.innerText = "Apagar";
    } else {
        lampada.src = "img/apagada.jpg";
        botao.innerText = "Acender";
    }
}




// ATIVIDADE 04
function calculoDesconto() {
    let valorPedido = Number(document.getElementById('inValorPedido').value);
    let descontoPercent = document.getElementById('inPercDesc');
    let descontoDinheiro = document.getElementById('inValDesc');
    let valorLiquido = document.getElementById('inValFinal');

    let percentual = 0;

    if (valorPedido >= 2000) {
        percentual = 1.5;
    } else if (valorPedido >= 1500) {
        percentual = 1.0;
    } else if (valorPedido >= 1000) {
        percentual = 0.8;
    } else if (valorPedido >= 500) {
        percentual = 0.5;
    } else {
        percentual = 0;
    }

    let valorDesconto = (valorPedido * percentual) / 100;
    let valorFinal = valorPedido - valorDesconto;

    descontoPercent.value = percentual.toFixed(1);
    descontoDinheiro.value = valorDesconto.toFixed(2);
    valorLiquido.value = valorFinal.toFixed(2);
}