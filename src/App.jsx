import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
  <div className="App">
    <div className="card">
      <img src={heroImg} alt="Hero" className="hero-image" />
      <h1>Welcome to My App</h1>
      <p>This is a simple React application with a hero image.</p>
    </div>
  </div>
)
}

export default App
