import { useNavigate, Link, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Dashboard</h1>
      <Link to="welcome">Say welcome</Link>
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </>
  );
}

export default Dashboard;
