const Plane = require("../../classes/Plane")
const Person = require("../../classes/Person")
describe("plane class is setup correctly", () => {
    let company = "testCompany"
    let origin = "testOrigin"
    let destination = "testDest"
    let passenger = new Person("people", "San Fran")
    let plane = new Plane(company, origin, destination)
    test("plane class has and assign the correct properties", () => {
        expect(plane.company).toBe(company)
        expect(plane.origin).toBe(origin)
        expect(plane.destination).toBe(destination)
    })
    test("plane passenges starts as an empty array", () => {
        expect(plane.passengers).toStrictEqual([])
    })
    test("we can add passengers correctly", () => {
        plane.addPassengers(passenger)
    })
})