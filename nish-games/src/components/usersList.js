import { useState, useEffect } from "react";
import { getUsers } from "../utils/utils";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
  });
  return (
    <div className="users-list">
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <p>
            <button>Change user</button>
            <br />
            <img
              className="user-image"
              src={user.avatar_url}
              alt={user.username}
            ></img>
            <br />
            {user.username}
          </p>
        );
      })}
    </div>
  );
};

export default UsersList;
