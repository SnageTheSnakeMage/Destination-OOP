const Airport = require("../../classes/Airport")
const Plane = require("../../classes/Plane")
describe("verifying airport class has right properites and methods", () => {
    let name = 't'
    let testPlane = new Plane("Spirit","Madeup, AZ","TotallyReal, MI")
    let planes
    let airportCode = 'test'
    let testAp = new Airport(name, airportCode, planes)
    test("verifying airports properties", () => {
        expect(testAp.name).toBe(name)
        expect(testAp.planes).toStrictEqual([])
        expect(testAp.airportCode).toBe(airportCode)
    })
    test("veryfing that we can add planes to an airport", () => {
        testAp.addPlanes(testPlane)
        expect(testAp.planes).toContain(testPlane)
    })
})