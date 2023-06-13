const assert = require("assert")
const Student = require("../src/student")
const ArticleBlog = require("../src/articleBlog")
const Comment = require("../src/comment")
const { isTypedArray } = require("util/types")

describe('Association', () => {
    let rachel, article, comment;

    beforeEach(done => {
        rachel = new Student({name: 'Rachel', number: 3})
        article = new ArticleBlog({title: 'MongoDB', content: 'Mongoose and Mocha'})
        comment = new Comment({content: 'Well done!'})

        rachel.articleBlog.push(article)
        article.comments.push(comment)
        comment.students = rachel

        Promise.all([rachel.save(), comment.save(), article.save()])
        .then(() => done())
    })

    it.only('Find the student', done => {
        Student.findOne({
            name: 'Rachel'
        })
        .then( student => {
            console.log(student)
            done()
        })
    })
})
