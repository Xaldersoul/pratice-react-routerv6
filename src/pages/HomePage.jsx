import { Link } from "react-router-dom";

function HomePage() {
  const userId = 10;
  return (
    <>
      <h1>Application</h1>
      <Link to={`/user/${userId}`}>User ID</Link> <br />
      <Link to="/user">Users</Link>
    </>
  );
}

export default HomePage;
