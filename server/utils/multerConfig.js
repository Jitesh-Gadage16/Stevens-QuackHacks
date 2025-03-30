// utils/multerConfig.js
const multer = require('multer');

const upload = multer({
    dest: process.env.UPLOAD_DIR || 'uploads/',
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        if (allowedTypes.includes(file.mimetype)) cb(null, true);
        else cb(new Error('Only PDF or Word documents allowed!'), false);
    },
});

module.exports = upload;
