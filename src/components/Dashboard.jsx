import { Link, Outlet } from 'react-router-dom'

function Dashboard({ userName }) {
  return (
    <section className="dashboard-container">
      <div className="panel">
        <p className="eyebrow">Dashboard</p>
        <h1>{userName}'s Dashboard</h1>
        <p className="muted">View profile details and application settings.</p>
      </div>

      <nav className="sub-nav">
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </section>
  )
}

export default Dashboard
