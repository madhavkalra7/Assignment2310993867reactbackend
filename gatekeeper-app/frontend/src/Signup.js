import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signup", { username, password });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div>
      <h2>📝 Signup</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br /><br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br /><br />
      <button onClick={handleSignup}>Signup</button>
      <p>{msg}</p>
    </div>
  );
}

export default Signup;
