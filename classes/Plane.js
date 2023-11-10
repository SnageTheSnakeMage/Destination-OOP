const Person = require("../classes/Person.js")
class Plane {
    constructor(company, origin, destination, passengers = []) {
        this.company = company
        this.origin = origin
        this.destination = destination
        this.passengers = passengers
    }
    getPassengers() {
        return this.passengers
    }
    addPassengers(passengers) {
        this.passengers.push(passengers)
    }


}


module.exports = Plane;