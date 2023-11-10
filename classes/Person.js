const Bag = require("../classes/Bag.js");
class Person {
    constructor(name, destination, bags = []) {
        this.name = name
        this.destination = destination
        this.bags = bags
    }
    addBags(bags) {
        this.bags.push(bags)
    }
    getBags() {
        return this.bags
    }

}


module.exports = Person;