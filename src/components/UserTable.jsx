// src/components/UserTable.js
import React from "react";
import { Button, Table } from "react-bootstrap";

const UserTable = ({ users, handleEdit, handleDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <Button
                variant="warning"
                onClick={() => handleEdit(user)}
                className="mr-2"
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDelete(user.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
