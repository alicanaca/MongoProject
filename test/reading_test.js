const assert = require("assert")
const Student = require("../src/student")

describe("Read the data", () => {
    let jason;
    beforeEach((done) => {
        jason = new Student({name: "Jason-3", number: 1})
        jason.save()
        .then(() => done())
    })
    it("Finding the data", async () => {
        const students = await Student.find({name: "Jason-3"})
        assert(students[0]._id.toString() === jason._id.toString())
    })
})