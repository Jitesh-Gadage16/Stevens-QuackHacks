import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto">
                <Link to="/" className="font-bold">CareerGPT</Link>
            </div>
        </nav>
    );
}
