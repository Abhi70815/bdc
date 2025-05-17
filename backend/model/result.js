const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    marks: { type: Number, required: true }
})

const resultSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    subjects: [subjectSchema],
    total: {
        type: Number,
        default: 0
    }
})

const Result = mongoose.model('results', resultSchema);

module.exports = Result;
 

