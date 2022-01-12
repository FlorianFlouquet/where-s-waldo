let minute = 0;
let seconde = 0;
let formatedSeconde;
let timeout;
let pointerX = 0;
let pointerY = 0;

const characters = [];


const image = document.getElementById('main').getElementsByTagName('img');

function startGame() {
    characters.push({'name': 'Waldo','posX': 2140,'posY': 1140});
    characters.push({'name': 'Wizard','posX': 140,'posY': 1170});
    characters.push({'name': 'Odlaw','posX': 760,'posY': 970});
    document.getElementsByTagName('button')[0].disabled = true;
    startTimer();
}

function startTimer() {
    timeout = setInterval(() => {
        seconde++;
        if (seconde === 60) {
            seconde = 0;
            minute++;
        };

        if (seconde < 10) {
            formatedSeconde = `0${seconde}`;
        }
        else if (seconde >= 10) {
            formatedSeconde = seconde;
        }
        document.getElementById('timer').innerText = `${minute}:${formatedSeconde}`;
    }, 1000);
}

function stopGame() {
    window.alert(`Votre score: ${document.getElementById('timer').innerText}`);
    clearInterval(timeout);
    seconde = 0;
    formatedSeconde = '00'
    minute = 0;
    document.getElementById('timer').innerText = `${minute}:${formatedSeconde}`;
    document.getElementsByTagName('button')[0].disabled = false;
}

const dropMenu = document.getElementById('dropdown-menu');

function selectChr(event) {
    dropMenu.classList.toggle('hidden');
    if (dropMenu.classList.value != 'hidden') {
        pointerX = event.offsetX;
        pointerY = event.offsetY;
    }
    dropMenu.setAttribute('style', `left: ${pointerX}px; top: ${pointerY}px`);
}

function verification(e) {
    var isRight = false 
    for (let i = 0; i < characters.length; i++) {
        if ((pointerX <= characters[i].posX + 100 && pointerX >= characters[i].posX) && (pointerY <= characters[i].posY + 100 && pointerY >= characters[i].posY)) {
            if (characters[i].name === e.innerText) {
                characters.splice(i, 1);
                dropMenu.removeChild(dropMenu.children[i]);
                if (isGameEnded()) {
                    console.log(document.getElementById('timer').innerText);
                    stopGame();
                }
                return;
            }
        }
    }
    if (!isRight) {
        window.alert('wrong');
    }
}

function isGameEnded () {
    if (characters.length === 0) {
        return true;
    }
    else {
        return false
    }
}