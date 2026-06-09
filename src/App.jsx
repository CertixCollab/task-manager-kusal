import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
  <BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="Dashboard">Dashboard</Link>
    <Link to="Profile">Profile</Link>
    <Link to="Settings">Settings</Link>
    <Link to="Login">Login</Link>
    <Link to="Register">Register</Link>
  </nav>
  <Routes>
    <Route path="/" element={<div>Home</div>} />
    <Route path="/Dashboard" element={<div>Dashboard</div>} />
    <Route path="/Profile" element={<div>Profile</div>} />
    <Route path="/Settings" element={<div>Settings</div>} />
    <Route path="/Login" element={<div>Login</div>} />
    <Route path="/Register" element={<div>Register</div>} />
  </Routes>
  </BrowserRouter>
)
}

export default App
