const Person = require("../classes/Person.js");
class Bag {
    constructor(weight,id,owner=null){
        this.weight = weight;
        this.id = id;
        this.owner = owner;
    }


    getOwner(){
        return this.owner;
    }

    assignOwner(person){
        this.owner = person;
    }
}


module.exports = Bag;