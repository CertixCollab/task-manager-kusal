import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Registration from './components/Registration'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [registeredName, setRegisteredName] = useState('')

  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="nav-bar">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <main className="page-shell">
          <Routes>
            <Route
              path="/"
              element={<Registration onRegister={setRegisteredName} />}
            />
            <Route
              path="/home"
              element={<Home userName={registeredName || 'User'} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/dashboard"
              element={<Dashboard userName={registeredName || 'User'} />}
            >
              <Route index element={<Navigate to="profile" replace />} />
              <Route
                path="profile"
                element={<Profile userName={registeredName || 'User'} />}
              />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
