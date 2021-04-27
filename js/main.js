function MakeCharacter(name, format, type, speed, attack, def, hp, maxHp, tp, maxTp, status, xp, isTurn) {
    this.name = name;
    this.format = format;
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

//Create PCs.  Will replace with custom created PC from PC creator later ;p

let char1 = new MakeCharacter ('Cid Le Chevalier', 'PC', 'Brawler', 5, 35, 20, 100, 100, 10, 10, 'healthy', 0, false)
let char2 = new MakeCharacter ('Goul', 'PC', 'Tank', 2, 35, 20, 150, 150, 5, 5, 'healthy', 0, false)
let char3 = new MakeCharacter ('Vampire', 'PC', 'Direct', 8, 35, 20, 80, 80, 25, 25, 'healthy', 0, false)
let char4 = new MakeCharacter ('Priest', 'PC', 'Healer', 3, 35, 20, 70, 70, 30, 30, 'healthy', 0, false)

//Create enemies

let enemy1 = new MakeCharacter ('Goblyn', 'enemy', 'Brawler', 4.5, 25, 5, 50, 50, 0, 0, 'healthy', 10, false)
let enemy2 = new MakeCharacter ('Goblyn Leftenant', 'enemy', 'Tank', 2.5, 25, 5, 50, 50, 0, 0, 'healthy', 10, false)
let enemy3 = new MakeCharacter ('Goblyn Mage', 'enemy', 'Wizard', 1.5, 25, 5, 50, 50, 0, 0, 'healthy', 10, false)
let enemy4 = new MakeCharacter ('Goblyn Assassin', 'enemy', 'Direct', 5.5, 25, 5, 50, 50, 0, 0, 'healthy', 10, false)

//The old way of making enemies is below.  Delete this if the new way works I guess.

/*
function MakeEnemy(name, speed, attack, def, hp, maxHp, xpValue) {
    this.name = name;
    this.speed = speed;
    this.attack = attack;
    this.def = def;
    this.hp = hp;
    this.maxHp = maxHp;
    this.xpValue = xpValue;
}
*/
/*
let enemy1 = new MakeEnemy('Gob', 25, 5, 50, 50, 10)
let enemy2 = new MakeEnemy('Gob King', 25, 5, 100, 100, 10)
let enemy3= new MakeEnemy('Gob Wiz', 25, 5, 25, 25, 10)
let enemy4 = new MakeEnemy('Gob Thief', 25, 5, 35, 35, 10)
*/

let turnCount = 0




//Initialization stuff below.

//Defining some variables for the pop-up-message-window

document.querySelector('#confirm').addEventListener('click', confirmButtonPressed)

const popUpWindow = document.querySelector('.pop-up-message-window')

function confirmButtonPressed() {
    popUpWindow.style = 'display: none;'
}

function init() {
    //Set the turn count in the DOM to 1
    document.querySelector('.message-window h3').innerText = (turnCount + 1)

    //Un-comment the below code to re-engage the pop up window at start.

    // popUpWindow.style = 'display: block;'
    
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


}

init()

//Determining Initiative Order

let initiativeArray = [char1, char2, char3, char4, enemy1, enemy2, enemy3, enemy4]

function createInitiativeOrder() {
    initiativeArray.sort((a,b)=> b.speed-a.speed )
    console.log(initiativeArray)
}

createInitiativeOrder()

function turnUpdate() {
    if (turnCount < initiativeArray.length){
        initiativeArray[turnCount].isTurn = true;
    console.log(`Turn number: ${turnCount}.`)
    } else if (turnCount = initiativeArray.length) {
        turnCount = 0
    }
    displayTurnIndicator()
}

turnUpdate()

function displayTurnIndicator() {

    if (char1.isTurn === true) {
        document.querySelector('#char1-name').style = 'text-decoration: underline;'
        document.querySelector('#char1-name').style = 'color: red;'
    } else if (char1.isTurn === false) {
        document.querySelector('#char1-name').style = 'text-decoration: none;'
        document.querySelector('#char1-name').style = 'color: white;'
    }

    if (char2.isTurn === true) {
        document.querySelector('#char2-name').style = 'text-decoration: underline;'
        document.querySelector('#char2-name').style = 'color: red;'
    } else if (char2.isTurn === false) {
        document.querySelector('#char2-name').style = 'text-decoration: none;'
        document.querySelector('#char2-name').style = 'color: white;'
    }

    if (char3.isTurn === true) {
        document.querySelector('#char3-name').style = 'text-decoration: underline;'
        document.querySelector('#char3-name').style = 'color: red;'
    } else if (char3.isTurn === false) {
        document.querySelector('#char3-name').style = 'text-decoration: none;'
        document.querySelector('#char3-name').style = 'color: white;'
    }

    if (char4.isTurn === true) {
        document.querySelector('#char4-name').style = 'text-decoration: underline;'
        document.querySelector('#char4-name').style = 'color: red;'
    } else if (char4.isTurn === false) {
        document.querySelector('#char4-name').style = 'text-decoration: none;'
        document.querySelector('#char4-name').style = 'color: white;'
    }

    //Now the same for the enemies

    if (enemy1.isTurn === true) {
        document.querySelector('#enemy1-name').style = 'text-decoration: underline;'
        document.querySelector('#enemy1-name').style = 'color: red;'
    } else if (enemy1.isTurn === false) {
        document.querySelector('#enemy1-name').style = 'text-decoration: none;'
        document.querySelector('#enemy1-name').style = 'color: white;'
    }

    if (enemy2.isTurn === true) {
        document.querySelector('#enemy2-name').style = 'text-decoration: underline;'
        document.querySelector('#enemy2-name').style = 'color: red;'
    } else if (enemy2.isTurn === false) {
        document.querySelector('#enemy2-name').style = 'text-decoration: none;'
        document.querySelector('#enemy2-name').style = 'color: white;'
    }

    if (enemy3.isTurn === true) {
        document.querySelector('#enemy3-name').style = 'text-decoration: underline;'
        document.querySelector('#enemy3-name').style = 'color: red;'
    } else if (enemy3.isTurn === false) {
        document.querySelector('#enemy3-name').style = 'text-decoration: none;'
        document.querySelector('#enemy3-name').style = 'color: white;'
    }

    if (enemy4.isTurn === true) {
        document.querySelector('#enemy4-name').style = 'text-decoration: underline;'
        document.querySelector('#enemy4-name').style = 'color: red;'
    } else if (enemy4.isTurn === false) {
        document.querySelector('#enemy4-name').style = 'text-decoration: none;'
        document.querySelector('#enemy4-name').style = 'color: white;'
    }

}

document.querySelector('#attack').addEventListener('click', attack)

function attack() {
    initiativeArray[turnCount].isTurn = false;
    console.log(`${initiativeArray[turnCount].name} attacks who?`)
    advanceTurn()
}

function advanceTurn() {
    if (turnCount < initiativeArray.length){
        turnCount += 1
    }
    document.querySelector('.message-window h3').innerText = (turnCount + 1)
    turnUpdate()
}