// src/components/UserForm.js
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const UserForm = ({ currentUser, handleSubmit }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(user);
    setUser({
      id: "",
      name: "",
      username: "",
      email: "",
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        {currentUser ? "Update" : "Add"} User
      </Button>
    </Form>
  );
};

export default UserForm;
