const relogio = document.querySelector("#relogio");
const data = document.querySelector("#data");
const frase = document.querySelector("#frase");

var dataDoComputadorDoUsuario = new Date();
var imagem = document.querySelector(".canvas-horario");
var hora = dataDoComputadorDoUsuario.getHours();
var minutos = dataDoComputadorDoUsuario.getMinutes();

setInterval(atualizarHorario, 60000);

function atualizarHorario() {
  dataDoComputadorDoUsuario = new Date();
  hora = dataDoComputadorDoUsuario.getHours();
  minutos = dataDoComputadorDoUsuario.getMinutes();
  relogio.innerHTML = `${formatarUnidade(hora)}:${formatarUnidade(minutos)}`;
}

function mostrarData() {
  var dia = dataDoComputadorDoUsuario.getDate();
  var diaDaSemana = dataDoComputadorDoUsuario.getDay();
  var mes = dataDoComputadorDoUsuario.getMonth() + 1;
  var ano = dataDoComputadorDoUsuario.getFullYear();

  data.innerHTML = `${descobrirDiaDaSemana(diaDaSemana)} - ${formatarUnidade(
    dia
  )} / ${formatarUnidade(mes)} / ${formatarUnidade(ano)}`;
}

function descobrirDiaDaSemana(diaDaSemana) {
  const diasAceitos = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
  return diasAceitos[diaDaSemana]
}

function montarFrase(hora) {
  if (hora >= 0 && hora < 12) {
    frase.innerHTML = "Bom Dia!";
    imagem.style.backgroundImage = "url(/assets/imagens/bom-dia-login.gif)";
    return;
  }
  if (hora >= 12 && hora < 18) {
    frase.innerHTML = "Boa Tarde!";
    imagem.style.backgroundImage = "url(/assets/imagens/boa-tarde-login.gif)";
    return;
  }
  if (hora >= 18 && hora <= 23) {
    frase.innerHTML = "Boa Noite!";
    imagem.style.backgroundImage = "url(/assets/imagens/boa-noite-login.gif)";
    return;
  }
}

function formatarUnidade(numero) {
  var eMenorQueNove = numero <= 9;
  if (eMenorQueNove) {
    numero = "0" + numero;
  }
  return numero;
}
atualizarHorario();
mostrarData();
montarFrase(hora);

const mostrarSenha = document.querySelector("#mostrar");
const imgBtnMostrarSenha = document.querySelector("#mostrar img");
const inputSenha = document.querySelector("#senha");
const svgPath = document.querySelector("#svg");
const svg = document.querySelector("svg");
mostrarSenha.addEventListener("click", mostrar);

function mostrar(event) {
  event.preventDefault();

  const imagemOlhoAbertoSvg =
    "M24 31.5q3.55 0 6.025-2.475Q32.5 26.55 32.5 23q0-3.55-2.475-6.025Q27.55 14.5 24 14.5q-3.55 0-6.025 2.475Q15.5 19.45 15.5 23q0 3.55 2.475 6.025Q20.45 31.5 24 31.5Zm0-2.9q-2.35 0-3.975-1.625T18.4 23q0-2.35 1.625-3.975T24 17.4q2.35 0 3.975 1.625T29.6 23q0 2.35-1.625 3.975T24 28.6Zm0 9.4q-7.3 0-13.2-4.15Q4.9 29.7 2 23q2.9-6.7 8.8-10.85Q16.7 8 24 8q7.3 0 13.2 4.15Q43.1 16.3 46 23q-2.9 6.7-8.8 10.85Q31.3 38 24 38Zm0-15Zm0 12q6.05 0 11.125-3.275T42.85 23q-2.65-5.45-7.725-8.725Q30.05 11 24 11t-11.125 3.275Q7.8 17.55 5.1 23q2.7 5.45 7.775 8.725Q17.95 35 24 35Z";
  const imagemOlhoFechadoSvg =
    "m629 637-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650 556q0 22-5.5 43.5T629 637Zm129 129-40-40q49-36 85.5-80.5T857 556q-50-111-150-175.5T490 316q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485 256q143 0 261.5 81.5T920 556q-26 64-67 117t-95 93Zm58 226L648 827q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40 556q20-52 55.5-101.5T182 360L56 234l42-43 757 757-39 44ZM223 402q-37 27-71.5 71T102 556q51 111 153.5 175.5T488 796q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z";

  if (mostrarSenha.classList.toggle("mostrar")) {
    inputSenha.type = "text";
    mostrarSenha.style.backgroundColor = "#1f1f1f"
    mostrarSenha.style.boxShadow =
      "inset 2px 2px 4px #313131,inset -2px -2px 4px #494949,0px 0px 0px 2px white"
    svg.setAttribute("viewBox", "0 0 45 45");
    svgPath.setAttribute("d", `${imagemOlhoAbertoSvg}`);
    mostrarSenha.style.opacity = '1'
    console.log(svgPath.getAttribute("d"));
    return;
  }

  inputSenha.type = "password";
  svg.setAttribute("viewBox", "0 80 960 960");
  svgPath.setAttribute("d", `${imagemOlhoFechadoSvg}`);
  mostrarSenha.style.opacity = '0.5'
  mostrarSenha.style.boxShadow = "2px 2px 4px #313131,-2px -2px 4px #494949,0px 0px 0px 2px white"
}
