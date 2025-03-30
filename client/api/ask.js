import axios from 'axios';

export default async function handler(req, res) {
  const { question } = req.body;
  const response = await axios.post('https://api.cohere.ai/v1/generate', {
    model: 'command',
    prompt: `Career Assistant: ${question}\nAnswer:`,
    max_tokens: 150
  }, {
    headers: {
      Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
  res.status(200).json({ answer: response.data.generations[0].text });
}

