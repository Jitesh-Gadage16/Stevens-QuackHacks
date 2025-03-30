import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function ResumeUpload() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resume', file);

        try {
            const { data } = await api.post('/upload-resume', formData);
            navigate(`/ask-ai/${data.resumeId}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleUpload}>
            <input type="file" required onChange={(e) => setFile(e.target.files[0])} />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Upload Resume</button>
        </form>
    );
}
