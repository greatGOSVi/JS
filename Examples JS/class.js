const Fight = require('./fight');

class Mob {
    constructor (name, maxHp, maxSp, dmg, def){
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.maxSp = maxSp;
        this.sp = maxSp;
        this.dmg = dmg;
        this.def = def;
        this.aggro = false;
    }

    attack () {
        if (this.sp > 0) {
            this.sp - 1;
        }
    }

    defend (dmg) {
        if (dmg - this.def > 0) {
            this.hp = this.hp - (dmg - this.def);
        }
    }

    heal () {
        if (this.hp + 1 < this.maxHp) {
            this.hp + 1;
        }
    }

    rest () {
        if (this.sp + 1 < this.maxSp) {
            this.sp + 1;
        }
    }

    recieveDmg (dmg) {
        this.hp = this.hp - dmg;
    }
}






const boar = new Mob("Boar", 20, 10, 8, 5);
const boar2 = new Mob("Boar", 20, 10, 8, 5);

const fight = new Fight(boar, boar2);

fight.do('attack');
console.log(boar2);