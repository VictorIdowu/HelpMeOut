import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import VideoViewDashboard from "./pages/VideoViewDashboard";
import { AuthContextProvider } from "./components/AuthContext";
import Protected from "./components/Protected";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route path="/video" element={<VideoViewDashboard />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
