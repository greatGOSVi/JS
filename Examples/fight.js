class Fight {
    constructor(mob1, mob2){
        this.mob1 = mob1;
        this.mob2 = mob2;
        this.round = 1;
        this.currentMob = null;
    }

    do(action){
        this.mobTurn();
        switch (action) {
            case 'attack': 
                this.mobAttacks();
                break;
            case 'heal':
                this.mobHeals();
                break;
            case 'rest':
                this.mobRest();
                break;
        }
    }

    mobTurn() {
        if(this.round % 2 === 1){
            this.currentMob = this.mob1;
        }
        else {
            this.currentMob = this.mob2;
        }
        this.round = this.round + 1;
    }

    mobAttacks(){
        if (this.currentMob === this.mob1){
            this.mob2.recieveDmg(this.mob1.dmg)
        }
    }
}

module.exports = Fight