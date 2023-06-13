const assert = require("assert")
const Student = require("../src/student")

describe('Virtual types', () => {
  it('article counts', done => {
    const alex = new Student({
        name: 'Alex',
        number: 10,
        articles: [{
            title: 'Fener'
        }]
    })
    alex.save()
    .then( () => Student.findOne({name: 'Alex'}))
    .then(student => {
        assert(student.articleCount === 1)
        done()
    })
  })
})
