import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import AnswerCard from '../components/AnswerCard';

export default function AskAI() {
    const { resumeId } = useParams();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/ask', { resumeId, question });
            setAnswer(data.answer);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1 className="text-xl font-bold">Ask CareerGPT</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ask a question"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="border p-2 w-full my-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>

            {answer && <AnswerCard answer={answer} />}
        </div>
    );
}
