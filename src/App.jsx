import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Registration from './components/Registration'
import About from './components/About'

function App() {

  return (
  <BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="Dashboard">Dashboard</Link>
    <Link to="Profile">Profile</Link>
    <Link to="Settings">Settings</Link>
    <Link to="Register">Register</Link>
    <Link to="About">About</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/Settings" element={<Settings />} />
    <Route path="/Register" element={<Registration />} />
    <Route path="/About" element={<About />} />
  </Routes>
  </BrowserRouter>
)
}

export default App
