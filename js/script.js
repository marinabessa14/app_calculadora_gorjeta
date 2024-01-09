const contaQuant = document.getElementById("conta");
const numPessoa = document.getElementById("pessoa");
const tipPorcent = document.getElementById("personalizado");
const valorConta = document.getElementById("valorGorj");
const totalContaPessoa = document.getElementById("total");
const resetButton = document.getElementById("resetBtn");
const buttons = document.querySelectorAll(".tipo-btns button");

// Calcular a gorjeta ao clicar no botão da porcentagem da gorjeta

buttons .forEach((button) => {
    button.addEventListener("click", (e) => {
        let tipoValue = e.target.innerText;
        tipoValue = tipoValue.substr(0, tipoValue.length - 1);

        if (contaQuant.value === "") return;
        if (numPessoa.value === "") numPessoa.value = 1;

        calcularTip(
            parseFloat(contaQuant.value),
            parseInt(tipoValue),
            parseInt(numPessoa.value)
        );
    });
});


// Calcular a gorjeta quando o usuário fornecer uma porcentagem de gorjeta personalizada

tipPorcent.addEventListener("blur", (e) => {
    if (contaQuant.value === "") {
        resetEverything();
        return;
    }

    if (numPessoa.value === "") numPessoa.value = 1;

    calcularTip(
        parseFloat(contaQuant.value),
        parseFloat(e.target.value),
        parseInt(numPessoa.value)
    );
});

// Calcular o Tipo

function calcularTip(contaQuant, tipPorcentagem, numPessoa) {
    let tipQuantia = (contaQuant * (tipPorcentagem / 100)) / numPessoa;
    let tip = Math.floor(tipQuantia * 100) / 100;
    tip = tip.toFixed(2);
  
    let totalQuantia = (tipQuantia * numPessoa + contaQuant) / numPessoa;
    totalQuantia = totalQuantia.toFixed(2);
  
    valorConta.innerHTML = `$${tip}`;
    totalContaPessoa.innerHTML = `$${totalQuantia}`;
  }
  
  //Reset Everything
  resetButton.addEventListener("click", resetEverything);
  function resetEverything() {
    valorConta.innerHTML = "$0.00";
    totalContaPessoa.innerHTML = "$0.00";
    contaQuant.value = "";
    numPessoa.value = "";
    PersonalTipPorcentagem.value = "";
  }

