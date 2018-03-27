var Arthas = new Champion({name: 'Arthas', attack: 70, hitpoints: 900});
var Deathwing = new Monster({name: 'Deathwing', attack: 60, hitpoints: 1100});
var Uther = new Champion({name: 'Uther', attack: 50, hitpoints: 1060});
var KelThuzad = new Monster({name: 'KelThuzad', attack: 100, hitpoints: 800});

var Thrall = new Champion({name: 'Thrall', attack: 45, hitpoints: 1200});
var Malganis = new Monster({name: 'Malganis', attack: 75, hitpoints: 1200});


function battleSimulation(player1, player2) {
    const body = document.getElementsByTagName('body')[0];
    let counter = 0;
    let heading = document.createElement('h1');
            heading.innerHTML = `Arena battle between ${player1.name} and ${player2.name}`;
        body.appendChild(heading);
    let div = document.createElement('div');
                div.setAttribute('title', 'Battle_log');
                div.className = 'Battle_log';
        body.appendChild(div);
        div.innerHTML = '<h1>Battle History</h1>'; 

function textLayer(text) {    
    let p = document.createElement('p');
    document.getElementsByClassName('Battle_log')[0].appendChild(p);
    p.innerText = text;
    } 

        if (player1 === player2) {
            throw new TypeError(alert('Incorrect input!')); 
        };

    while(player1.isAlive() && player2.isAlive()){
       
        counter++;
        //console.log(counter);
        textLayer(`${counter} ROUND`);
        
        player1.fight(player2); 
        textLayer(`${player1.name} deals ${player1.getAttack()} damage to ${player2.name}`);
        textLayer(`${player2.name} has ${player2.getHitpoints()} hitpoints`);

        if(player1.getHitpoints() <= 0 || player2.getHitpoints() <= 0) {     
            break;}
    
        player2.fight(player1);
        textLayer(`${player2.name} deals ${player2.getAttack()} damage to ${player1.name}`);
        textLayer(`${player1.name} has ${player1.getHitpoints()} hitpoints`); 
       
        if(player1.getHitpoints() <= (player1.getTotalHitpoints()/5)) {
                          
            if(player1 instanceof Champion) {
                player1.defence();
                player1.heal();
            textLayer(`${player1.name} has Armored UP!`);
            } else if(player1 instanceof Monster) {
                player1.enrage();
                textLayer(`${player1.name} ENRAGED!`);
            };

        } else if(player2.getHitpoints() <= player2.getTotalHitpoints()/5) { 
               
            if(player2 instanceof Champion) {
                player2.defence();
                player2.heal();
            textLayer(`${player2.name} has Armored UP!`);
            } else if(player2 instanceof Monster) {
                player2.enrage();
                textLayer(`${player2.name} ENRAGED!`); 
            };
        };
        if(player1.getHitpoints() <= 0 || player2.getHitpoints() <= 0) {     
            break;
        };        
    }   
if(!player1.isAlive()){
    textLayer(`${player2.name} Wins!`);
} else {
    textLayer(`${player1.name} Wins!`);
}     
}

//battleSimulation();