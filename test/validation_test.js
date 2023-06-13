const assert = require("assert")
const Student = require("../src/student")

describe('Validation test', () => {

    it("Id required", () => {
        const newStudent = new Student({name: "Alex", number: null})
        let result = newStudent.validateSync();
        assert(result.errors['number'].message === 'Id required')
    })  

    it("Prevent", (done) => {
        const newStudent = new Student({name: "A", number: 1})
        let result = newStudent.validateSync()
        newStudent.save()
        .catch( () => {
            assert(result.errors['name'].message === 'Name is too short')
            done()
        })
    })
})
