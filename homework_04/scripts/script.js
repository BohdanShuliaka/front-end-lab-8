function assign(target, args) {  
 'use strict';
 if (target == null) {
   throw new TypeError('Cannot convert undefined or null to object');
 }
 
 var to = Object(target);
 
 for (var i = 1; i < arguments.length; i++) {
   var nextSource = arguments[i]; 
   if (nextSource != null) {
     for (var nextKey in nextSource) {
       if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
         to[nextKey] = nextSource[nextKey];
         }
        }
      }
    }
    return to;
   };

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
Monster.prototype.constructor = Monster;

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
