// import React from 'react';

// const Contact = () => {
//   return <h1>Welcome to the Contact Page</h1>;
// };

// export default Contact;

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name} with email ${email}: ${message}`);
  };

  return (
    <div className="contact">
     <u> <h1>Contact Us</h1></u><br></br>
      <form>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div><br></br>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div><br></br>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div><br></br>
        <button type="submit">Send Message</button>
      </form>
      </form>
    </div>
  );
};

export default Contact;