import { useNavigate,useLocation } from "react-router-dom";
function Navigation2() {
  const navigate = useNavigate();
  const location = useLocation();

    console.log( "Current location:", location );
    const isActive = ( btnLocation ) => {
        //activer
        if ( location.pathname === btnLocation ) {
            return { backgroundColor: "red", color: "white", padding: "10px", margin: "5px" };
        } else {
            return {};
        }
    };

    return (
        <div>
            <button style={ isActive( "/" ) } onClick={ () => navigate( "/" ) }>
                Go to Home
            </button>
            <button style={ isActive( "/about" ) } onClick={ () => navigate( "/about" ) }>
                Go to About
            </button>
            <button style={ isActive( "/crazy" ) } onClick={ () => navigate( "/crazy" ) }>
                Go to Crazy Route
            </button>
            <button style={ isActive( "/non-existent" ) } onClick={ () => navigate( "/non-existent" ) }>
                Go Back
            </button>
        </div>
    );
}

export default Navigation2;