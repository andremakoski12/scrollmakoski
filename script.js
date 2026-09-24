/* =========================================
   CONFIGURAÇÕES GERAIS
========================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}


body {

  background: #08091c;

  color: white;

  font-family: 'Short Stack', cursive;

  overflow-x: hidden;
}


/* =========================================
   MÚSICA
========================================= */

audio {
  display: none;
}


/* =========================================
   ABERTURA
========================================= */

.hero {

  height: 100vh;

  position: relative;

  display: flex;

  justify-content: center;

  align-items: center;

  text-align: center;

  overflow: hidden;

  background:
    radial-gradient(
      circle at center,
      #20265c 0%,
      #0b0d24 50%,
      #050610 100%
    );
}


.hero-content {

  position: relative;

  z-index: 5;

  width: 90%;

  max-width: 1000px;

}


.mini-title {

  font-size: 18px;

  letter-spacing: 4px;

  text-transform: uppercase;

  opacity: 0.6;

  margin-bottom: 25px;
}


.hero h1 {

  font-family: 'Zeyada', cursive;

  font-size: clamp(80px, 15vw, 190px);

  font-weight: normal;

  line-height: 0.8;

  letter-spacing: -5px;
}


.hero h1 span {

  color: #ff5265;

}


.hero-subtitle {

  margin-top: 40px;

  font-size: 20px;

  opacity: 0.65;
}


/* CORAÇÃO GIGANTE AO FUNDO */

.hero-background-heart {

  position: absolute;

  font-size: 600px;

  opacity: 0.025;

  filter: blur(3px);

  animation: heartFloat 5s ease-in-out infinite;

}


@keyframes heartFloat {

  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }

}


/* INDICADOR */

.scroll-indicator {

  position: absolute;

  top: calc(100vh - 150px);

  left: 50%;

  transform: translateX(-50%);

  opacity: 0.7;

  width: 200px;
}


.scroll-indicator span {

  display: block;

  font-size: 35px;

  animation: arrowMove 1.5s infinite;
}


.scroll-indicator p {

  font-size: 12px;

  letter-spacing: 2px;

  text-transform: uppercase;
}


@keyframes arrowMove {

  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(0);
  }

}


/* =========================================
   CENAS
========================================= */

.scene {

  height: 250vh;

  position: relative;
}


/* Essa parte fica parada na tela enquanto
   o usuário continua rolando */

.scene-sticky {

  position: sticky;

  top: 0;

  height: 100vh;

  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  overflow: hidden;
}


/* =========================================
   NÚMEROS AO FUNDO
========================================= */

.background-number {

  position: absolute;

  font-family: 'Zeyada', cursive;

  font-size: 60vw;

  line-height: 1;

  opacity: 0.025;

  user-select: none;

  pointer-events: none;
}


/* =========================================
   FOTOS
========================================= */

.photo {

  position: absolute;

  width: min(500px, 70vw);

  z-index: 3;

  opacity: 0;

  transform-origin: center center;

  will-change: transform, opacity, filter;
}


.photo img {

  display: block;

  width: 100%;

  height: auto;

  border-radius: 6px;

  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.6);

  user-select: none;
}


/* =========================================
   TEXTO
========================================= */

.scene-text {

  position: absolute;

  z-index: 5;

  width: 90%;

  max-width: 1000px;

  pointer-events: none;

  opacity: 0;

  will-change: transform, opacity;
}


.scene-text p {

  font-family: 'Zeyada', cursive;

  font-size: clamp(35px, 6vw, 75px);

  line-height: 1;

  margin-bottom: 20px;
}


.scene-text h2 {

  font-size: clamp(45px, 7vw, 100px);

  line-height: 0.95;

  font-weight: normal;
}


.scene-text h2 span {

  color: #ff5265;
}


.love-small {

  margin-top: 30px;

  font-size: 25px !important;

  opacity: 0.7;
}


/* =========================================
   CENA 1
========================================= */

.scene-one {

  background:
    radial-gradient(
      circle at 70% 50%,
      #272c65,
      #090b20 60%,
      #050610
    );
}


.photo-one {

  left: 50%;

  top: 50%;

  transform:
    translate(-50%, -50%)
    scale(0.3)
    rotate(-12deg);
}


.text-one {

  left: 8%;

  top: 65%;

  transform:
    translateY(80px);
}


/* =========================================
   CENA 2
========================================= */

.scene-two {

  background:
    radial-gradient(
      circle at 30% 50%,
      #54283f,
      #150b24 60%,
      #050610
    );
}


.photo-two {

  left: 50%;

  top: 50%;

  transform:
    translate(-50%, -50%)
    scale(0.3)
    rotate(12deg);
}


.text-two {

  right: 8%;

  top: 25%;

  text-align: right;

  transform:
    translateY(-80px);
}


/* =========================================
   CENA 3
========================================= */

.scene-three {

  background:
    radial-gradient(
      circle at 50% 50%,
      #3a1e48,
      #0e0a20 60%,
      #050610
    );
}


.photo-three {

  left: 50%;

  top: 50%;

  transform:
    translate(-50%, -50%)
    scale(0.3)
    rotate(-8deg);
}


.text-three {

  left: 50%;

  top: 18%;

  text-align: center;

  transform:
    translateX(-50%)
    translateY(-80px);
}


/* =========================================
   FINAL
========================================= */

.ending {

  min-height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  text-align: center;

  position: relative;

  overflow: hidden;

  background:
    radial-gradient(
      circle at center,
      #401b38,
      #0a0819 70%
    );
}


.ending-content {

  position: relative;

  z-index: 5;

  width: 90%;

  max-width: 1100px;
}


.ending-small {

  font-size: 18px;

  opacity: 0.5;

  letter-spacing: 2px;
}


.ending h2 {

  font-family: 'Zeyada', cursive;

  font-weight: normal;

  font-size: clamp(70px, 12vw, 160px);

  line-height: 0.8;

  margin-top: 30px;
}


.ending h3 {

  font-family: 'Zeyada', cursive;

  font-size: clamp(50px, 8vw, 100px);

  font-weight: normal;

  color: #ff6b7b;

  margin-top: 30px;
}


.ending-heart {

  font-size: 100px;

  margin: 50px auto;

  animation: pulseHeart 1.5s infinite;

}


.names {

  font-size: 18px;

  letter-spacing: 4px;

  opacity: 0.6;
}


@keyframes pulseHeart {

  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }

}


/* =========================================
   CELULAR
========================================= */

@media (max-width: 700px) {

  .hero h1 {

    font-size: 75px;

    letter-spacing: -2px;

  }


  .hero-background-heart {

    font-size: 350px;

  }


  .photo {

    width: 78vw;

  }


  .scene-text p {

    font-size: 38px;

  }


  .scene-text h2 {

    font-size: 48px;

  }


  .text-one {

    left: 7%;

    top: 70%;

  }


  .text-two {

    right: 7%;

    top: 20%;

  }


  .text-three {

    top: 12%;

  }


  .ending h2 {

    font-size: 75px;

  }


  .ending h3 {

    font-size: 55px;

  }

}