import {
  Link,
  Outlet,
} from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mx-auto p-10">
      <div className="bg-white shadow-lg rounded p-6">

        <h1 className="text-3xl font-bold mb-5">
          Dashboard
        </h1>

        <div className="flex gap-5 mb-5">

          <Link
            to="profile"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Profile
          </Link>

          <Link
            to="settings"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Settings
          </Link>

        </div>

        <Outlet />

      </div>
    </div>
  );
}

export default Dashboard;