// models/Resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    originalFileName: { type: String, required: true },
    storedFileName: { type: String, required: true },
    filePath: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    questions: [
        {
            questionText: { type: String, required: true },
            answerText: { type: String, required: true },
            askedAt: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model('Resume', resumeSchema);
