const assert = require("assert")
const Student = require("../src/student")

describe("Create the data", () => {
    it("Save the student", (done) => {
        const jason = new Student({name: "Jason", number: 1})
        jason.save()
        .then(() => {
            assert(!jason.isNew);
            done();
        })
    })
})