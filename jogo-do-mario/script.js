const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const fundo = document.querySelector('.game-board');
const contadorElement = document.getElementById("contador");
const recarregarBotao = document.getElementById("recarregar");

let contador = 0;

const pulo = () => {
    mario.classList.add('pulo');
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 600);
};

const puloMobile = () => {
    pulo();
};

const loop = setInterval(() => {
    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 75) {
        tubo.style.left = `${tuboPosition}px`;
        tubo.style.animation = 'none';

        mario.style.left = `${marioPosition}px`;
        mario.style.animation = 'none';

        mario.src = './imagens/game-over.png';
        fundo.innerHTML = 'GAME OVER';
        fundo.style.textAlign = 'center';
        fundo.style.paddingTop = '50px';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        contadorElement.style.display = 'none';
        const resultadoElement = document.getElementById("resultado");
        const resultadoContagemElement = document.getElementById("resultado-contagem");
        resultadoContagemElement.textContent = contador;
        resultadoElement.classList.remove("resultado-hidden");
        resultadoElement.style.position = 'absolute';
        resultadoElement.style.top = '50%';
        resultadoElement.style.left = '50%';
        resultadoElement.style.transform = 'translate(-50%, -50%)';
        recarregarBotao.style.display = 'block';
        
        clearInterval(loop);
    } else {
        contador++;
        contadorElement.textContent = contador;
    }
}, 10);

document.addEventListener('keydown', pulo);
document.addEventListener('touchstart', puloMobile);

recarregarBotao.addEventListener("click", () => {
    window.location.reload();
});
