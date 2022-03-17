import { useParams } from "react-router-dom";

function UserInfo() {
  const params = useParams();

  return (
    <div>
      <h1>User {params.id}</h1>
    </div>
  );
}

export default UserInfo;
