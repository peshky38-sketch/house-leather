import Filterlist from "./Filterlist.jsx";

function Sidebar() {
  return (
    <div
      style={ {
        display: "flex",
        width: "300px",
        flexDirection: "column",
      } }
    >
      <Filterlist
        title="Condition"
        options={ [ "New", "Used", "Renewed" ] } />
      
      <Filterlist
        title={"Material"}
        options={ [ "Cotton", "Polyester", "Wool" ] } />
      
      <Filterlist
        title={ "Uses" }
        options={ [ "Wearable", "Decorative", "Functional", "Sports", "Fashion"
          
        ] }
      />
      <Filterlist
        title={ "Brand" }
        options={ [ "Nike", "Adidas", "Puma", "Reebok", "Under Armour" ] }
         
      />
    </div>
        
  );
        
      }

 

export default Sidebar;
