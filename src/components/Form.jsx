import React, { useState } from "react";

function Form({ initialData, onAddUser, onUpdateUser, onCancel }) {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      age: 0,
      email: "",
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialData) {
      onUpdateUser({ ...formData, id: initialData.id });
    } else {
      onAddUser(formData);
    }
    setFormData({
      name: "",
      age: 0,
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">{initialData ? "Update" : "Add"}</button>
      {initialData && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default Form;
