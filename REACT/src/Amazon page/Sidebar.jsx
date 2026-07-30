import Filterlist from "./Filterlist.jsx";

function Sidebar() {
  return (
    <div
      style={{
        display: "flex",
      width: "400px",
        flexDirection: "column",
      }}    
    >
      <Filterlist />
      <Filterlist />
      <Filterlist />
      <Filterlist />
      <Filterlist />
    </div>
  );
}

export default Sidebar;
