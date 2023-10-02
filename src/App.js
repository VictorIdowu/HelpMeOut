import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from "./pages/SignUp"
import Dashboard from './pages/Dashboard';
import VideoViewDashboard from './pages/VideoViewDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/video' element={<VideoViewDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
