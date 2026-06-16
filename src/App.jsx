import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  const [userName, setUserName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Register
                setUserName={setUserName}
              />
            }
          />

          <Route
            path="/home"
            element={
              <Home
                userName={userName}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          >
            <Route
              path="profile"
              element={
                <Profile
                  userName={userName}
                />
              }
            />

            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;