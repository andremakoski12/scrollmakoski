// ========================================
// MÚSICA
// ========================================

const musica = document.getElementById("musica");


function iniciarMusica() {

  if (!musica.paused) {
    return;
  }

  musica.volume = 0;

  musica.play().then(() => {

    const duracaoFade = 10000;

    const inicio = performance.now();


    function aumentarVolume(agora) {

      const tempoPassado = agora - inicio;

      const progresso = Math.min(
        tempoPassado / duracaoFade,
        1
      );

      musica.volume = progresso;


      if (progresso < 1) {

        requestAnimationFrame(aumentarVolume);

      } else {

        musica.volume = 1;

      }

    }


    requestAnimationFrame(aumentarVolume);

  }).catch((erro) => {

    console.log(
      "Não foi possível iniciar a música:",
      erro
    );

  });

}


// ========================================
// PRIMEIRO TOQUE
// ========================================

document.addEventListener(
  "pointerdown",
  iniciarMusica,
  {
    once: true
  }
);


// ========================================
// TODAS AS CENAS
// ========================================

const cenas = document.querySelectorAll(".scene");


// ========================================
// FUNÇÃO PARA LIMITAR VALOR
// ========================================

function clamp(valor, minimo, maximo) {

  return Math.min(
    Math.max(valor, minimo),
    maximo
  );

}


// ========================================
// ANIMAÇÃO
// ========================================

function animarCenas() {

  const alturaTela = window.innerHeight;


  cenas.forEach((cena) => {

    const sticky = cena.querySelector(
      ".scene-sticky"
    );

    const photo = cena.querySelector(
      ".photo"
    );

    const text = cena.querySelector(
      ".scene-text"
    );


    const rect =
      cena.getBoundingClientRect();


    /*
      Quando:

      rect.top = altura da tela
      → ainda não começou

      rect.top = 0
      → chegou no topo

      rect.top = -altura da tela
      → já passou
    */


    let progresso =
      (alturaTela - rect.top) /
      (alturaTela + rect.height);


    progresso = clamp(
      progresso,
      0,
      1
    );


    // ====================================
    // FOTO
    // ====================================

    let fotoProgresso =
      clamp(
        progresso * 2,
        0,
        1
      );


    /*
      Começa pequena
      e termina grande
    */

    const escala =
      0.3 +
      fotoProgresso * 0.85;


    /*
      Faz uma pequena rotação
    */

    let rotacao = 0;


    if (cena.classList.contains("scene-one")) {

      rotacao =
        -12 +
        fotoProgresso * 12;

    }


    if (cena.classList.contains("scene-two")) {

      rotacao =
        12 -
        fotoProgresso * 12;

    }


    if (cena.classList.contains("scene-three")) {

      rotacao =
        -8 +
        fotoProgresso * 8;

    }


    // ====================================
    // POSIÇÃO DA FOTO
    // ====================================

    let x = -50;

    let y = -50;


    /*
      Cena 1:

      a foto entra de baixo
    */

    if (
      cena.classList.contains("scene-one")
    ) {

      y =
        100 -
        fotoProgresso * 150;

    }


    /*
      Cena 2:

      entra pela esquerda
    */

    if (
      cena.classList.contains("scene-two")
    ) {

      x =
        -150 +
        fotoProgresso * 100;

    }


    /*
      Cena 3:

      entra de cima
    */

    if (
      cena.classList.contains("scene-three")
    ) {

      y =
        -150 +
        fotoProgresso * 100;

    }


    // ====================================
    // OPACIDADE DA FOTO
    // ====================================

    let opacidade = 0;


    if (fotoProgresso < 0.2) {

      opacidade =
        fotoProgresso / 0.2;

    } else {

      opacidade = 1;

    }


    /*
      Quando a cena está acabando,
      começa a desaparecer
    */

    if (progresso > 0.8) {

      opacidade =
        1 -
        ((progresso - 0.8) / 0.2);

    }


    opacidade =
      clamp(
        opacidade,
        0,
        1
      );


    // ====================================
    // APLICA FOTO
    // ====================================

    photo.style.transform =

      `translate(${x}%, ${y}%)
       scale(${escala})
       rotate(${rotacao}deg)`;


    photo.style.opacity =
      opacidade;


    // ====================================
    // TEXTO
    // ====================================

    let textoProgresso =
      clamp(
        (progresso - 0.25) / 0.35,
        0,
        1
      );


    /*
      Texto sobe enquanto aparece
    */

    let textoY =
      80 -
      textoProgresso * 80;


    let textoOpacidade =
      textoProgresso;


    /*
      No final da cena,
      texto desaparece
    */

    if (progresso > 0.75) {

      textoOpacidade =
        1 -
        ((progresso - 0.75) / 0.25);

    }


    textoOpacidade =
      clamp(
        textoOpacidade,
        0,
        1
      );


    // ====================================
    // POSIÇÃO DO TEXTO
    // ====================================

    if (
      cena.classList.contains("scene-three")
    ) {

      text.style.transform =
        `translateX(-50%)
         translateY(${textoY}px)`;

    } else {

      text.style.transform =
        `translateY(${textoY}px)`;

    }


    text.style.opacity =
      textoOpacidade;

  });

}


// ========================================
// SCROLL
// ========================================

window.addEventListener(
  "scroll",
  animarCenas,
  {
    passive: true
  }
);


// ========================================
// REDIMENSIONAMENTO
// ========================================

window.addEventListener(
  "resize",
  animarCenas
);


// ========================================
// PRIMEIRA EXECUÇÃO
// ========================================

animarCenas();
