const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = require('./article_schema')

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, 'Name is too short'],
    },
    number: {
        type: Number,
        required: [true, 'Id required']
    },
    grade: Number,
    article: Number,
    articles: [ArticleSchema],
    articleBlog: [{
        type: Schema.Types.ObjectId,
        ref: 'articleBlog'
    }]
})

StudentSchema.virtual('articleCount').get(function(){
    return this.articles.length
})

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;