// src/components/UserList.js
import React, { useState, useEffect } from "react";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../services/userService";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleAdd = async (user) => {
    if (user.id) {
      await updateUser(user);
    } else {
      await addUser({ ...user, id: users.length + 1 });
    }
    const data = await getUsers();
    setUsers(data);
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    const data = await getUsers();
    setUsers(data);
  };

  return (
    <div>
      <UserForm currentUser={currentUser} handleSubmit={handleAdd} />
      <UserTable
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default UserList;
