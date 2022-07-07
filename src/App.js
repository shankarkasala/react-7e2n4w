import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handelSubmit = (e) => {
    e.preventDefault();
    let res = fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        id: Math.random() * 1000,
        name: name,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log('respone submited'));
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
