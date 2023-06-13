const assert = require("assert")
const Student = require("../src/student")

describe("Delete the records", () => {
    let jason;
    let rosa;

    beforeEach((done) => {
        jason = new Student({name: "Jason-4", number: 1})
        rosa = new Student({name: "Rosa", number: 2})
        jason.save()
        rosa.save()
        .then(() => done())
    })

    // it("Delete by id", (done) => {
    //     Student.findByIdAndDelete(jason._id)
    //     .then(() => Student.findOne({name: "Jason"}))
    //     .then((student) => {
    //         assert(student == null)
    //         done()
    //     })
    // })

    // it("Delete by name", (done) => {
    //     Student.findOneAndDelete({name: "Jason"})
    //     .then(() => Student.findOne({_id: jason._id}))
    //     .then((student) => {
    //         assert(student == null)
    //         done()
    //     })
    // })

    it("Delete jason", (done) => {
        Student.deleteOne({_id: jason._id})
        .then(() => Student.findOne({name: "Jason-4"}))
        .then((student) => {
            assert(student == null)
            done()
        })
    })
})
