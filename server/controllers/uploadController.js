// controllers/uploadController.js
const Resume = require('../models/Resume');

exports.uploadResume = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded.' });

    try {
        const newResume = await Resume.create({
            originalFileName: req.file.originalname,
            storedFileName: req.file.filename,
            filePath: req.file.path,
        });

        res.status(201).json({
            message: 'Resume uploaded successfully!',
            resumeId: newResume._id,
            filename: newResume.storedFileName,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
