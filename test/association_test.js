const assert = require("assert")
const Student = require("../src/student")
const ArticleBlog = require("../src/articleBlog")
const Comment = require("../src/comment")

describe('Association', () => {
    let rachel, article, comment;

    beforeEach(done => {
        rachel = new Student({name: 'Rachel', number: 3})
        article = new ArticleBlog({title: 'MongoDB', content: 'Mongoose and Mocha'})
        comment = new Comment({content: 'Nicely done!'})

        rachel.articleBlog.push(article)
        article.comments.push(comment)
        comment.students = rachel

        Promise.all([rachel.save(), comment.save(), article.save()])
        .then(() => done())
    })

    it('Associate the student with articleBlog', done => {
        Student.findOne({
            name: 'Rachel'
        })
        .populate('articleBlog')
        .then( student => {
            assert(student.articleBlog[0].title === 'MongoDB')
            done()
        })
    })

    it.only('Nested association', done => {
        Student.findOne({name: 'Rachel'})
        .populate({
            path: 'articleBlog',
            populate: {
                path: 'comments',
                model: 'comment',
                populate: {
                    path: 'students',
                    model: 'student'
                }
            }
        })
        .then( student => {
            assert(student.articleBlog[0].title === 'MongoDB')
            assert(student.articleBlog[0].comments[0].content === 'Nicely done!')
            assert(student.articleBlog[0].comments[0].students.name === 'Rachel')
            done()
        })
    })
})
