function random(max) {
    return Math.floor(Math.random()*Math.floor(max));
}

function sleep(delay) {
    let start = new Date().getTime();
    while (new Date().getTime()< start + delay);
}

class Faction {
    constructor(name, life) {
        this.name = name ;
        this.life = life ;
    }
    alliance(target){
        console.log(`Les ${this.name} ont conclu une alliance avec les ${target.name} `)
    }
    bataille(target, damage, index){
        target.life -= damage;
        console.log(`Les ${this.name} ont mener une bataille contre les ${target.name} - ${damage}`)
        if(target.life < 0) {
            console.log(`RIP ${target.name}`)
            character.splice(index,1);
        }
    }
    recrutement(nbrRecrutement){
        this.life += nbrRecrutement;
        console.log(`La faction ${this.name} ont recruté des nouvelle unité! ${nbrRecrutement} -> ${this.life}`)
    }
}

let characterNames = ['Skaven','Empire','Homme-Lezard','Nains','Vanpire','Haut Elfe','Elfe Noir'];
let numberOfCharacters = 6;
let character = [];

for(let i = 0; i <= numberOfCharacters; i++) {
    character.push(new Faction(characterNames[i],10000));
}
console.log (character)
while(true) {
    let emitterAction = random(character.length);
    let receiverAction = random(character.length); 
    let action = random(3);
    if(character.length <= 1) {
        console.log(`${character[0].name} IS WINNER !`)
        return false;
    }
    if(action === 0){
        character[emitterAction].alliance(character[receiverAction]);
    } else if (action === 1) {
        character[emitterAction].bataille(character[receiverAction],random(9999),receiverAction);
    } else if (action === 2) {
        character[emitterAction].recrutement(random(6000));
    }


    

    sleep(5); 
}