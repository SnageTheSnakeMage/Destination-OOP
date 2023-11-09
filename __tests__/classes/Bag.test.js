const Bag = require("../../classes/Bag.js");

describe("Able to create instance of bag class", () =>{
    test("create instance of bag class", () =>{
        let newBag = new Bag(25,1, "Bob");
        expect(newBag.weight).toBe(25);
        expect(newBag.id).toBe(1);
        expect(newBag.owner).toBe("Bob");
    })
    let nullBag = new Bag(13,4);
    test("verify to get initial owner", () =>{
        expect(nullBag.owner).toBe(null);
    })
    test("updating the owner", () =>{
        let newOwner = new Person();
        nullBag.assignOnwer(newOwner);
        expect(nullBag.owner).toBe(newOwner);
    })
})