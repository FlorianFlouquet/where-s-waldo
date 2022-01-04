let minute = 0;
let seconde = 0;
let formatedSeconde;
let timeout;
let pointerX = 0;
let pointerY = 0;

const characters = [
    {
        'name': 'Waldo',
        'posX': 2140,
        'posY': 1140
    },
    {
        'name': 'Wizard',
        'posX': 140,
        'posY': 1170
    },
    {
        'name': 'Odlaw',
        'posX': 760,
        'posY': 970
    }
];


const image = document.getElementById('main').getElementsByTagName('img');

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

function stop() {
    clearInterval(timeout);
    seconde = 0;
    formatedSeconde = '00'
    minute = 0;
    document.getElementById('timer').innerText = `${minute}:${formatedSeconde}`;
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
    for (let i = 0; i < 3; i++) {
        if ((pointerX <= characters[i].posX + 100 && pointerX >= characters[i].posX) && (pointerY <= characters[i].posY + 100 && pointerY >= characters[i].posY)) {
            if (characters[i].name === e.innerText) {
                console.log('oui bravo')
            }
            else {
                console.log('ah bah non');
            }
        }
        else {
            console.log('nope');
        }
    }
}