function MakeCharacter(name, type, speed, attack, def, hp, maxHp, tp, maxTp, status, xp, isTurn) {
    this.name = name;
    this.type = type;
    this.speed = speed;
    this.attack = attack;
    this.def = def;
    this.hp = hp;
    this.maxHp = maxHp
    this.tp = tp;
    this.maxTp = maxTp;
    this.status = status;
    this.xp = xp;
    this.isTurn = isTurn;
}

let char1 = new MakeCharacter ('Jergen', 'Brawler', 35, 20, 100, 100, 10, 10, 'Healthy', 0, false)
let char2 = new MakeCharacter ('Goul', 'Tank', 35, 20, 150, 150, 5, 5, 'Healthy', 0, false)
let char3 = new MakeCharacter ('Vampire', 'Direct', 35, 20, 80, 80, 25, 25, 'Healthy', 0, false)
let char4 = new MakeCharacter ('Priest', 'Healer', 35, 20, 70, 70, 30, 30, 'Healthy', 0, false)

function MakeEnemy(name, speed, attack, def, hp, maxHp, xpValue) {
    this.name = name;
    this.speed = speed;
    this.attack = attack;
    this.def = def;
    this.hp = hp;
    this.maxHp = maxHp;
    this.xpValue = xpValue;
}

let enemy1 = new MakeEnemy('Gob', 25, 5, 50, 50, 10)
let enemy2 = new MakeEnemy('Gob King', 25, 5, 100, 100, 10)
let enemy3= new MakeEnemy('Gob Wiz', 25, 5, 25, 25, 10)
let enemy4 = new MakeEnemy('Gob Thief', 25, 5, 35, 35, 10)


let combatTurn = {
    side: true,
    number: 0
}

//Load all the displayed Character information into the DOM

document.querySelector('#char1-name').innerText = char1.name
document.querySelector('#char1-hp').innerText = char1.hp
document.querySelector('#char1-hp-total').innerText = char1.maxHp
document.querySelector('#char1-tp').innerText = char1.tp
document.querySelector('#char1-tp-total').innerText = char1.maxTp

document.querySelector('#char2-name').innerText = char2.name
document.querySelector('#char2-hp').innerText = char2.hp
document.querySelector('#char2-hp-total').innerText = char2.maxHp
document.querySelector('#char2-tp').innerText = char2.tp
document.querySelector('#char2-tp-total').innerText = char2.maxTp

document.querySelector('#char3-name').innerText = char3.name
document.querySelector('#char3-hp').innerText = char3.hp
document.querySelector('#char3-hp-total').innerText = char3.maxHp
document.querySelector('#char3-tp').innerText = char3.tp
document.querySelector('#char3-tp-total').innerText = char3.maxTp

document.querySelector('#char4-name').innerText = char4.name
document.querySelector('#char4-hp').innerText = char4.hp
document.querySelector('#char4-hp-total').innerText = char4.maxHp
document.querySelector('#char4-tp').innerText = char4.tp
document.querySelector('#char4-tp-total').innerText = char4.maxTp

//Load all the displayed Enemy information into the DOM

document.querySelector('#enemy1-name').innerText = enemy1.name
document.querySelector('#enemy1-hp').innerText = enemy1.hp
document.querySelector('#enemy1-hp-total').innerText = enemy1.maxHp

document.querySelector('#enemy2-name').innerText = enemy2.name
document.querySelector('#enemy2-hp').innerText = enemy2.hp
document.querySelector('#enemy2-hp-total').innerText = enemy2.maxHp

document.querySelector('#enemy3-name').innerText = enemy3.name
document.querySelector('#enemy3-hp').innerText = enemy3.hp
document.querySelector('#enemy3-hp-total').innerText = enemy3.maxHp

document.querySelector('#enemy4-name').innerText = enemy4.name
document.querySelector('#enemy4-hp').innerText = enemy4.hp
document.querySelector('#enemy4-hp-total').innerText = enemy4.maxHp


//Initialization stuff below.

//Defining some variables for the pop-up-message-window

document.querySelector('#confirm').addEventListener('click', confirmButtonPressed)

const popUpWindow = document.querySelector('.pop-up-message-window')

function confirmButtonPressed() {
    popUpWindow.style = 'display: none;'
}

function init() {
    popUpWindow.style = 'display: block;'
}

init()

//Determining Initiative Order

let initiativeArray = [char1, char2, char3, char4, enemy1, enemy2, enemy3, enemy4]

function createInitiativeOrder() {
    initiativeArray.sort((a,b)=> )
}