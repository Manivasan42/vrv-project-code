import React, { useState } from "react";
import "../styles/UserManagement.css"; 
import { FaSearch } from "react-icons/fa"; 
const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", active: true },
    { id: 2, name: "Jane Smith", role: "User", active: true },
  ]);
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newUser, setNewUser] = useState({ name: "", role: "" });
  const [newRoleName, setNewRoleName] = useState("");
  const [editedUserId, setEditedUserId] = useState(null); // Track which user is being edited
  const [editedUser, setEditedUser] = useState({ name: "", role: "" }); 
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name.trim() || !newUser.role.trim()) {
      alert("Name and Role are required.");
      return;
    }
    const user = { id: Date.now(), name: newUser.name, role: newUser.role, active: true };
    setUsers((prevUsers) => [...prevUsers, user]);
    setNewUser({ name: "", role: "" });
  };

  const handleAddRole = (e) => {
    e.preventDefault();
    if (!newRoleName.trim()) {
      alert("Role name cannot be empty.");
      return;
    }
    const newRole = { id: roles.length + 1, name: newRoleName };
    setRoles((prevRoles) => [...prevRoles, newRole]);
    setNewRoleName("");
  };

  const handleEditUser = (user) => {
    setEditedUserId(user.id);
    setEditedUser({ name: user.name, role: user.role });
  };

  const handleSaveUser = () => {
    if (!editedUser.name.trim() || !editedUser.role.trim()) {
      alert("Name and Role are required.");
      return;
    }
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editedUserId ? { ...user, ...editedUser } : user
      )
    );
    setEditedUserId(null); 
    setEditedUser({ name: "", role: "" }); 
  };

  const handleCancelEdit = () => {
    setEditedUserId(null); 
    setEditedUser({ name: "", role: "" }); 
  };

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
  

  return (
    <div className="user-role-management">
   
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by name or role..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      
      <div className="form-container">
        <form onSubmit={handleAddUser}>
          <h2>Add New User</h2>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            required
          />
          <button type="submit" className="action-button">Add User</button>
        </form>

        <form onSubmit={handleAddRole}>
          <h2>Add New Role</h2>
          <input
            type="text"
            placeholder="Role Name"
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
            required
          />
          <button type="submit" className="action-button">Add Role</button>
        </form>
      </div>

      <div className="table-container">
        <h2>User List</h2>
        {filteredUsers.length === 0 ? (
          <p>No users found for your search query.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    {editedUserId === user.id ? (
                      <input
                        type="text"
                        value={editedUser.name}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, name: e.target.value })
                        }
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>
                    {editedUserId === user.id ? (
                      <input
                        type="text"
                        value={editedUser.role}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, role: e.target.value })
                        }
                      />
                    ) : (
                      user.role
                    )}
                  </td>
                  <td className={user.active ? "active" : "inactive"}>
                    {user.active ? "Active" : "Inactive"}
                  </td>
                  <td>
                    <button onClick={() => handleToggleUserStatus(user.id)} className="action-button">Toggle</button>
                    <button onClick={() => handleDeleteUser(user.id)} className="action-button">Delete</button>
                    {editedUserId === user.id ? (
                      <>
                        <button onClick={handleSaveUser} className="action-button">Save</button>
                        <button onClick={handleCancelEdit} className="action-button">Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => handleEditUser(user)} className="action-button">Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
        <div className="Roles-tbl">
        <h2>Roles</h2>
        <ul>
          {roles.map((role) => (
            <li key={role.id}>{role.name}</li>
          ))}
        </ul>
        </div>
        
        
      </div>
    </div>
  );
};

export default UserManagement;
