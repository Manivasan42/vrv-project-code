import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "Editor" },
    { id: 3, name: "Viewer" },
  ]);
  const [newRole, setNewRole] = useState("");

  const handleAddRole = () => {
    if (!newRole.trim()) {
      alert("Role name cannot be empty.");
      return;
    }

    const newRoleObj = { id: roles.length + 1, name: newRole.trim() };
    setRoles([...roles, newRoleObj]);
    setNewRole("");
  };

  return (
    <div>
      <h2>Role Management</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Role"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
      />
      <button onClick={handleAddRole}>Add Role</button>
    </div>
  );
};

export default RoleManagement;
