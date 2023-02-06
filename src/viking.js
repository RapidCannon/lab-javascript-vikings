// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    
    attack()
    {
        return this.strength;
    }
    
    receiveDamage(damage)
    {
        this.health = this.health - damage;
    }
    
}

// Viking
class Viking extends Soldier{
    constructor(name , health , strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0)
        {
            return `${this.name} has received ${damage} points of damage`
        }
        else 
        {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else 
            return `A Saxon has died in combat`
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = new Array(); 
        this.saxonArmy = new Array();
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let numVikings = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let numSaxons = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const damageTaken = numSaxons.receiveDamage(numVikings.strength);
        if (numSaxons.health <= 0) {
          this.saxonArmy.pop(numSaxons);
        }
        return damageTaken;


    }

    saxonAttack(){
        let numVikings = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let numSaxons = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const damageTaken = numVikings.receiveDamage(numSaxons.strength);
        if (numVikings.health <= 0) {
          this.vikingArmy.pop(numVikings);
        }
        return damageTaken;

    }

    showStatus(){
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0)
        {
            return "Vikings and Saxons are still in the thick of battle."
        }
        else if (this.saxonArmy.length === 0 )
        {
            return "Vikings have won the war of the century!"
        } 
        else if (this.vikingArmy.length === 0 )
        {
            return "Saxons have fought for their lives and survived another day..."
        }
    }
}
