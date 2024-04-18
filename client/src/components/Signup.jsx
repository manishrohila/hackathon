import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Signup successful:', data);
      // You can redirect the user or show a success message here
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle errors (e.g., display error message to the user)
    }
  };

  return (
    <div className="App">
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br />
        <label htmlFor="role">role:</label><br />
        <input type="role" id="role" name="role" value={formData.role} onChange={handleChange} required /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
