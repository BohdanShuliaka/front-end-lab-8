class Fighter {
    constructor(name, power, health) {
      this.name = name;
      this.power = power;
      this.health = health;
    }
    setDamage(damage) {
      this.health = this.health - damage;
      console.log(`${this.name} health is ${this.health}`);
    }
    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
    knockout() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log("time is over");
              resolve();
            }, 500);
          });
    }
  }

  class ImprovedFighter extends Fighter {
      doubleHit(enemy, point) {
          super.hit(enemy, point * 2);
      }
  }

  const fighter = new Fighter('Thrall', 5, 500);
  const improvedFighter = new ImprovedFighter('Deathwing', 4, 600);

  async function fight(fighter, improvedFighter, ...point) {
    console.log(`Let the battle between ${fighter.name} and ${improvedFighter.name} begins`);
    for(let i = 0; i < point.length; i++) {
        fighter.hit(improvedFighter, point[i]);
        if(improvedFighter.health <= 0) {
            await improvedFighter.knockout();
            console.log(`${fighter.name} WON!`)
            break
        }
        improvedFighter.hit(fighter, point[i]);
        if(fighter.health <= 0) {
            await fighter.knockout();
            console.log(`${improvedFighter.name} WON!`)
            break
        }
        if(improvedFighter.health <= 0 && fighter.health <= 0) {
            console.log(`ITS A DRAW FRIENDS`)
        }
    }

  }

  fight(fighter, improvedFighter, 20, 34, 45, 33);