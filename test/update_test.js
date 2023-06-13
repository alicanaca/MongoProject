const assert = require("assert")
const Student = require("../src/student")

describe('Updating the data', () => {
    let jason;
    
    beforeEach((done) => {
        jason = new Student({name: "Jason-2", number: "100", grade: 10, article: 5})
        jason.save()
        .then(() => {
            done()
        })
    })

    it("Update grade", async () => {
        const artCount = await Student.findOne({name: "Jason-2"})
        const student = await Student.updateOne({name: "Jason-2"}, {$mul: {grade: artCount.article}})
        const res = await Student.find({name: "Jason-2"})
        assert(res[0].grade === 50)
    })

    // it("Set and save", (done) => {
    //     jason.set("name", "Alex");
    //     jason.save()
    //     .then(() => {
    //         Student.find({})
    //     })
    //     .then((students) => {
    //         assert(students[0].name === "Alex");
    //     });
    //     done();
    // });

    // it("Update one", async () => {
    //     const student = await Student.updateOne({name: "Jason"}, {number: "99"})
    //     const res = await Student.find({})
    //     assert(res[0].number === 99)
    //     console.log(res)
    // })

    // it("Update all", async () => {
    //     const student = await Student.updateMany({name: "Jason"}, {number: "99"})
    //     const res = await Student.find({})
    //     assert(res[0].number === 99 && res[1].number === 99)
    //     console.log(res)
    // })
})
