import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/user";
import { getUsers } from "../utils/utils";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  return (
    <section>
      <h2>Users</h2>
      <ul className="users-list">
        {users.map((user) => {
          return (
            <li className="change-user" key={user.username}>
              <img
                className="user-image"
                src={user.avatar_url}
                alt={user.username}
              ></img>
              <br />
              {user.username}
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setUser(user);
                }}
              >
                Change user
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UsersList;
