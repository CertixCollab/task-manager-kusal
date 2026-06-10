function Profile({ userName }) {
  return (
    <section className="info-panel">
      <h2>Profile</h2>
      <p>Name: {userName}</p>
      <p>Role: Employee</p>
    </section>
  )
}

export default Profile
