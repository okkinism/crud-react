import React, { useState } from "react";
import Form from "./Form";

function User({ user, onDeleteUser, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleUpdate = (updatedUser) => {
    onUpdateUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <Form
          initialData={user}
          onUpdateUser={handleUpdate}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default User;
