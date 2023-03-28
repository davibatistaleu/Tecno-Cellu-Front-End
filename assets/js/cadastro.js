const numeroASerAnimado = document.querySelector('[data-anime="numero"]');
const numeroOriginal = Number(numeroASerAnimado.textContent);

var inicio = numeroOriginal - 400;
var fim = numeroOriginal;

numeroASerAnimado.innerHTML = `${inicio}`;

function animar() {
  if (inicio < fim) {
    inicio = inicio + 1;
    numeroASerAnimado.innerHtml = inicio;
    numeroASerAnimado.innerHTML = `${inicio}`;
    return;
  }
  clearInterval(atualizar);
}

let atualizar = setInterval(animar, 10);
