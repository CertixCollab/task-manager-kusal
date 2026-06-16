function Profile({
  userName,
}) {
  return (
    <div className="border p-4 rounded">

      <h2 className="text-2xl font-bold mb-3">
        User Profile
      </h2>

      <p>
        Name:{" "}
        <strong>
          {userName || "Guest"}
        </strong>
      </p>

    </div>
  );
}

export default Profile;