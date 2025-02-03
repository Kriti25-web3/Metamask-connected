import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState("");

  return (
    <input
      type="email"
      placeholder="Enter your Gmail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="email-input"
    />
  );
};

export default EmailInput;