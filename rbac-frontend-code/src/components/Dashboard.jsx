import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserRoleManagement from "./UserManagement";
import AddUser from "./AddUser";
import logo from "../images/vrv.jpeg"; 
import "../styles/Dashboard.css";
const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", active: true },
    { id: 2, name: "Jane Smith", role: "Editor", active: true },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "Editor" },
    { id: 3, name: "Viewer" },
  ]);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  <br></br>

  const handleToggleUserStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, active: !user.active } : user
      )
    );
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleEditUser = (userId, updatedName, updatedRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, name: updatedName, role: updatedRole } : user
      )
    );
  };

  const handleAddRole = (newRoleName) => {
    const newRole = { id: roles.length + 1, name: newRoleName.trim() };
    setRoles((prevRoles) => [...prevRoles, newRole]);
  };

  return (
    <div className="dashboard-containers">
       <header className="dashboard-header">
        <img src={logo} alt="Logo" className="dashboard-logo" />
      </header>
      <h1>RBAC Dashboard</h1>
      <Routes>
        <Route
          path="/"
          element={
            <UserRoleManagement
              users={users}
              roles={roles}
              onToggleUserStatus={handleToggleUserStatus}
              onDeleteUser={handleDeleteUser}
              onEditUser={handleEditUser}
              onAddUser={handleAddUser}
              onAddRole={handleAddRole}
            />
          }
        />
        <Route path="/add-user" element={<AddUser onAddUser={handleAddUser} />} />
      </Routes>
      
    </div>
  );
};

export default Dashboard;
