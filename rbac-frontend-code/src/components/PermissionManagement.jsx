import React, { useState } from "react";

const PermissionManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [newPermission, setNewPermission] = useState("");

  const handleAddPermission = () => {
    if (!selectedRole || !newPermission.trim()) {
      alert("Please select a role and enter a permission.");
      return;
    }

    const updatedRoles = roles.map((role) =>
      role.id === selectedRole.id
        ? { ...role, permissions: [...role.permissions, newPermission.trim()] }
        : role
    );
    setRoles(updatedRoles);
    setNewPermission("");
  };

  return (
    <div>
      <h2>Permission Management</h2>

      
      <div>
        <label>Select Role: </label>
        <select
          value={selectedRole?.id || ""}
          onChange={(e) =>
            setSelectedRole(
              roles.find((role) => role.id === parseInt(e.target.value))
            )
          }
        >
          <option value="">-- Select Role --</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>

      
      {selectedRole && (
        <div>
          <h3>Permissions for {selectedRole.name}</h3>
          <ul>
            {selectedRole.permissions.map((permission, index) => (
              <li key={index}>{permission}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add new permission"
            value={newPermission}
            onChange={(e) => setNewPermission(e.target.value)}
          />
          <button onClick={handleAddPermission}>Add Permission</button>
        </div>
      )}
    </div>
  );
};

export default PermissionManagement;
