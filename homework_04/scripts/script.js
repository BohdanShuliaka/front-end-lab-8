// TODO: remove layout comments before submitting homework
// Task 1
// function assign(target, args) {  
//  'use strict';
//  if (target == null) { // TypeError if undefined or null
//    throw new TypeError('Cannot convert undefined or null to object');
//  }
 
//  var to = Object(target);
 
//  for (var i = 1; i < arguments.length; i++) {
//    var nextSource = arguments[i];
 
//    if (nextSource != null) { // Skip over if undefined or null
//      for (var nextKey in nextSource) {
//        // Avoid bugs when hasOwnProperty is shadowed
//        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
//          to[nextKey] = nextSource[nextKey];
//          }
//         }
//       }
//     }
//     return to;
//    };


// var defaults = { width: 100, height: 100 };
// var options = { width: 150 };
// var configs = assign({}, defaults, options);
// console.log(configs);



// Task 2


function Unit({name, attack, hitpoints}) {
    this.name = name;
    this.attack = attack;
    this.currentHitpoints = hitpoints;
    this.totalHitpoints = hitpoints;
    
}
Unit.prototype.getHitpoints = function() {
    return this.currentHitpoints;
}
Unit.prototype.setHitpoints = function(hitpoints) {
    this.currentHitpoints = hitpoints;
}
Unit.prototype.getTotalHitpoints = function() {
    return this.totalHitpoints;
}
Unit.prototype.setTotalHitpoints = function(hitpoints) {
    this.totalHitpoints = hitpoints;
}
Unit.prototype.getAttack = function() {
    return this.attack;
}
Unit.prototype.setAttack = function(attack) {
    this.attack = attack;
}
Unit.prototype.fight = function(opponent) {
    if(this.isAlive() && this !== opponent) {
        if(this.enrageState && this.enrageCounter > 0){
            this.enragedAttack();
        };
        if(opponent.armorUp) {
            opponent.armorUp = false;
        } else {
            opponent.setHitpoints(opponent.getHitpoints() - this.getAttack());
            if(!opponent.isAlive()){
                this.victoryBonus(opponent);
            }
        };
    }
}
Unit.prototype.isAlive = function() {
    return this.getHitpoints() > 0;
}

function Champion() {
    Unit.apply(this, arguments);
    this.armorUp = false;
}
Champion.prototype = Object.create(Unit.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.heal = function() {
    if(this.getHitpoints() + 5 >= this.getTotalHitpoints()) {
        return this.setHitpoints(this.getTotalHitpoints());
    } else {
        return this.setHitpoints(this.getHitpoints() + 5);
    }
}
Champion.prototype.defence = function() {
    this.setTotalHitpoints(this.getTotalHitpoints() + 1);
    this.armorUp = true;
}
Champion.prototype.victoryBonus = function() {
    this.setAttack(this.getAttack() + 1);
}

function Monster() {
    Unit.apply(this, arguments);
    this.enrageCounter = 0;
    this.enrageState = false;
}
Monster.prototype = Object.create(Unit.prototype);
Monster.prototype.constructor = Champion;

Monster.prototype.enrage = function() {
    this.enrageCounter = 2;
    this.enrageState = true;
};
Monster.prototype.enragedAttack = function() {
    this.setAttack(this.getAttack() * 2);
    this.enrageCounter--;
};

Monster.prototype.fury = function() {
    if (this.getHitpoints() > 5 && this.getTotalHitpoints() > 5) {
        this.setHitpoints(this.getHitpoints() - 5);
        this.setTotalHitpoints(this.getTotalHitpoints() - 5);
        this.setAttack(this.getAttack() + 2);

    };
};
Monster.prototype.victoryBonus = function(opponent) {
    this.setHitpoints(Math.floor(this.getHitpoints() + (opponent.getTotalHitpoints() / 4 )));
    this.setTotalHitpoints(Math.floor(this.getTotalHitpoints() + (opponent.getTotalHitpoints() / 10 )));
}

var hunter = new Champion({name: 'Rexxar', attack: 10, hitpoints: 60});
var beast = new Monster({name: 'King Krush', attack: 8, hitpoints: 80});

console.log(beast.getHitpoints()); 

console.log(hunter.fight(beast));
console.log(beast.getHitpoints()); // -> 70
console.log(beast.enrage());

console.log(hunter.fight(beast));

console.log(beast.getHitpoints()); // -> 60
console.log(beast.fight(hunter));

console.log(beast.getAttack());   // 16
console.log(hunter.getHitpoints()); // -> 44

console.log(hunter.fight(beast));
console.log(hunter.fight(beast));
console.log(hunter.fight(beast));
console.log(hunter.fight(beast));

console.log(beast.getHitpoints());

console.log(hunter.fight(beast));
console.log(beast.isAlive()); // -> false
console.log(hunter.getAttack()); // -> 11
console.log(hunter.getHitpoints()); // -> 44
console.log(hunter.heal());
console.log(hunter.getHitpoints()); // -> 49
