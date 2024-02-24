import React, { useState, useEffect } from "react";
import User from "./User";
import Form from "./Form";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Gagal mendapatkan data:", error);
    }
  };

  const handleAddUser = async (user) => {
    try {
      await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      fetchUsers();
    } catch (error) {
      console.error("Gagal menambahkan data:", error);
    }
  };

  const handleEditUser = async (user) => {
    try {
      await fetch(`http://localhost:8000/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      fetchUsers();
    } catch (error) {
      console.error("Gagal mengedit data:", error);
    }
  };

  const handleDeleteUser = async (user) => {
    try {
      await fetch(`http://localhost:8000/users/${user.id}`, {
        method: "DELETE",
      });
      fetchUsers();
    } catch (error) {
      console.error("Gagal menghapus data:", error);
    }
  };

  return (
    <>
      <Form onAddUser={handleAddUser} />
      <ul className="user-list">
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
          />
        ))}
      </ul>
    </>
  );
}

export default UserList;
