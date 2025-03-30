// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../utils/multerConfig');
const { uploadResume } = require('../controllers/uploadController');
const { askQuestion } = require('../controllers/aiController');

router.post('/upload-resume', upload.single('resume'), uploadResume);
router.post('/ask', askQuestion);

module.exports = router;
