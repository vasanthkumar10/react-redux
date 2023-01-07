import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

export function Userview() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users</h2>
      {usersData.loading && <h3>Loading.....</h3>}
      {!usersData.loading && usersData.error && (
        <h3>Error occurred: {usersData.error}</h3>
      )}
      {!usersData.loading && usersData.users && (
        <ul>
          {usersData.users.map((user) => (
            <div key={user.id}>
              <h3>name: {user.name}</h3>
              <h3>email: {user.email}</h3>
              <h3>mobile: {user.phone}</h3>
              <hr />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
