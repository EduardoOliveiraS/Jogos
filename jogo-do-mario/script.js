const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const fundo = document.querySelector('.game-board');




const pulo = () => {

    mario.classList.add('pulo'); //Vai adicionar uma a classe pulo

    setTimeout(() => {
        mario.classList.remove('pulo'); //Vai retirar a classe pulo
    },600)

}

const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (tuboPosition<=120 && tuboPosition > 0 && marioPosition < 75) {

        
        tubo.style.letf = `${tuboPosition}px`
        tubo.style.animation = 'none';

        
        mario.style.letf = `${marioPosition}px`
        mario.style.animation = 'none';

        mario.src = './imagens/game-over.png'
        fundo.innerHTML = 'GAME OVER'
        fundo.style.textAlign = 'center'
        fundo.style.paddingTop = '50px'
        mario.style.width= '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

    

}, 10);
document.addEventListener('keydown', pulo);