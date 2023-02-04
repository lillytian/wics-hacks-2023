import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import HomePage from './pages/HomePage';
import LockdownStart from './pages/LockdownStart';
import LockdownTimer from './pages/LockdownTimer';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/setup" element={<LockdownStart/>} />
        <Route path="/lockdown" element={<LockdownTimer/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/settings" element={<SettingsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
