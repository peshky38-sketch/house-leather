import { NavLink } from "react-router-dom";

function Navigation1() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/crazy"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Crazy Route
      </NavLink>
    </div>
  );
}

export default Navigation1;