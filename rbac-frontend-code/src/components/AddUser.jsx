import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) {
      alert("Name and Role are required.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      role,
      active: true,
    };

    onAddUser(newUser);
    setName("");
    setRole("");
    navigate("/");
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user name"
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter user role"
            required
          />
        </div>
        <button type="submit">Add User</button>
        <button type="submit">Cancel</button>
      </form>
    </div>
  );
};

export default AddUser;
