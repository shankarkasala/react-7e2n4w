import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handelSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    axios
      .post('https://jsonplaceholder.typicode.com/users', data)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="name"
          // onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="email"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
