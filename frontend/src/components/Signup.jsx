import { useState } from 'react';
import { signup } from '../services/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await signup({ username, email, password });
            navigate('/signin');
        } catch (err) {
            console.error(err);
            alert(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2 className="font-bold">Signup</h2>
            <input type="text" placeholder="Username" required value={username} onChange={e => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Signup</button>
            <p>Already have an account? <Link to="/signin">Signin</Link></p>
        </form>
    );
}
