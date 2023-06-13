const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/students_test", { useNewUrlParser: true });

mongoose.connection
    .once("open", () => console.log("Connection established"))
    .on("error", (error) => {
        console.warn("error", error)
    })

beforeEach((done) => {
    mongoose.connection.collections.students.deleteMany();
    mongoose.connection.collections.comments.deleteMany();
    mongoose.connection.collections.articleblogs.deleteMany();
    done();
})
