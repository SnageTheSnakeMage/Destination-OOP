const Person = require("../../classes/Person.js");
const Bag = require("../../classes/Bag.js");

describe("Person class has correct properties",() => {
    let name = "testName"
    let destination = "testDestination"
    let weight = 1
    let id = 0
    let testPerson = new Person(name, destination)
    let testBag = new Bag(weight,id)
    test("can create a person class instance", () => {
        expect(testPerson.name).toBe(name)
        expect(testPerson.destination).toBe(destination)
    })
    test("bag array initalizes to an empty array", () => {
        expect(testPerson.bags).toStrictEqual([])
    })
    test("addBags() adds a bag to the array", () => {
        testPerson.addBags(testBag)
        expect(testPerson.bags).toContain(testBag)
    })
})