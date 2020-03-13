import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Species">Species</Link>
      <h1>Welcome To Admin Page</h1>
    </div>
  );
}

export default Admin;
