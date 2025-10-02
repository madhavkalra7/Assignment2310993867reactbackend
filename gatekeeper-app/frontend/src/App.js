import React from "react";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚪 Code Academy Gatekeeper</h1>
      <Signup />
      <hr style={{ margin: "40px 0" }} />
      <Login />
    </div>
  );
}

export default App;
