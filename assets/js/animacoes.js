const elementosAnimados = document.querySelectorAll("[data-anime]");

// informações necessárias
const tamanhoDaTela = window.innerHeight;
const animationScroll = window.addEventListener("scroll", debounce(animar, 50));

// funções
export function debounce(fn, timer) {
  let intervalo;
  return function () {
    clearTimeout(intervalo);
    intervalo = setTimeout(fn, timer);
  };
}

export default function animar() {
  console.log('animar');
  elementosAnimados.forEach((element) => {
    const distanciaDoTopo = element.offsetTop;
    const posicaoBarraDeScroll = window.pageYOffset;
    const posicaoFinalBarraDeScroll =
      posicaoBarraDeScroll + (tamanhoDaTela * 3.5) / 4;

    if (distanciaDoTopo < posicaoFinalBarraDeScroll) {
      element.classList.add("anime");
    }
  });
}
animar()
