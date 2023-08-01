import './App.css';
import Login from './Component/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            {/* Root route (exact) */}
            <Route path="/" element={<Login />} />

            {/* Dashboard route */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
