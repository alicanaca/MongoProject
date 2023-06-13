const assert = require("assert")
const Student = require("../src/student")

describe('Subdocument', () => {
    // it('Creating a subdocument', (done) => {
    //     const jason = new Student({
    //         name: 'Jason',
    //         number: 1,
    //         articles: [{ title: 'Javascript' }]
    //     })
    //     jason.save()
    //         .then(() => {
    //             Student.findOne({ name: 'Jason' })
    //                 .then(student => {
    //                     assert(student.articles[0].title === 'Javascript')
    //                     done()
    //                 })
    //         })
    // })

    it('Adding a record', done => {
        const jason = new Student({
            name: 'Jason-1',
            number: 2,
            articles: []
        })
        jason.save()
            .then(() =>
                Student.findOne({ name: 'Jason-1' })
            )
            .then(student => {
                student.articles.push({ title: 'MongoDB' })
                return student.save()
            })
            .then(() =>
                Student.findOne({ name: 'Jason-1' })
            )
            .then(student => {
                assert(student.articles[0].title === 'MongoDB')
                done()
            })
    })

    it('Remove the records', done => {
        const jason = new Student({
            name: 'Jason-5',
            number: 2,
            articles: [{title: 'MongoDB'}]
        })
        jason.save()
            .then(() =>
                Student.findOne({ name: 'Jason-5' })
            )
            .then(student => {
                student.articles[0].deleteOne()
                return student.save()
            })
            .then(() =>
                Student.findOne({ name: 'Jason-5' })
            )
            .then(student => {
                assert(student.articles.length === 0)
                done()
            })
    })
})
