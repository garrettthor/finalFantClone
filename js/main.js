function MakeCharacter(name, type, attack, def, hp, maxHp, tp, maxTp, status, xp, isTurn) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.def = def;
    this.hp = hp;
    this.maxHp = maxHp
    this.tp = tp;
    this.maxTp = maxTp;
    this.status = status;
    this.xp = xp;
    this.isTurn = false;
}

let char1 = new MakeCharacter ('Jergen', 'Brawler', 35, 20, 100, 100, 10, 10, 'Healthy', 0, false)
let char2 = new MakeCharacter ('Goul', 'Tank', 35, 20, 150, 150, 5, 5, 'Healthy', 0, false)
let char3 = new MakeCharacter ('Vampire', 'Direct', 35, 20, 80, 80, 25, 25, 'Healthy', 0, false)
let char4 = new MakeCharacter ('Priest', 'Healer', 35, 20, 70, 70, 30, 30, 'Healthy', 0, false)


let enemy1 = {
    name: 'Gob',
    attack: 25,
    def: 5,
    hp: 50,
    tp: 5,
    xpValue: 10,
}

let combatTurn = {
    side: true,
    number: 0
}

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







function init() {
    
}