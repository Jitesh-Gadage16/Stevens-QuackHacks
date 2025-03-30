import { useState } from 'react';
import { signin } from '../services/auth';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signin: login } = useAuth();
    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await signin({ email, password });
            login(data);
            navigate('/');
        } catch (err) {
            console.error(err);
            alert(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSignin}>
            <h2 className="font-bold">Signin</h2>
            <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Signin</button>
            <p>No account? <Link to="/signup">Signup</Link></p>
        </form>
    );
}
