// controllers/aiController.js
const axios = require('axios');
const Resume = require('../models/Resume');

exports.askQuestion = async (req, res) => {
    const { resumeId, question } = req.body;

    if (!resumeId || !question)
        return res.status(400).json({ message: 'Resume ID and question required.' });

    try {
        const aiResponse = await axios.post(
            'https://api.cohere.ai/v1/generate',
            {
                model: 'command',
                prompt: `Career Assistant: ${question}\nAnswer:`,
                max_tokens: 150,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const answer = aiResponse.data.generations[0].text.trim();

        const resume = await Resume.findById(resumeId);
        if (!resume) return res.status(404).json({ message: 'Resume not found.' });

        resume.questions.push({ questionText: question, answerText: answer });
        await resume.save();

        res.status(200).json({ answer });
    } catch (err) {
        res.status(500).json({ error: 'AI request failed.', details: err.message });
    }
};
