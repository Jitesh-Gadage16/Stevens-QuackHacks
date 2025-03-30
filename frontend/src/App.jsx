import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AskAI from './pages/Ask';
import NotFound from './pages/NotFound';
import Signup from './components/Signup';
import Signin from './components/Signin';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/ask-ai/:resumeId" element={<ProtectedRoute><AskAI /></ProtectedRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
