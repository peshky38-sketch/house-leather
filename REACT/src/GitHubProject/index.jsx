import { useState ,useEffect} from "react";
import axios from "axios";
function GitHubProject() {

    const [ people, setPeople ] = useState( [] );
    //fetch api:axios.get("https://api.github.com/users").then((response) => {
    //setPeople(response.data);
    //});
    const getUserdata = async () => {
        try {
            let response = await axios( {
                method: "GET",
                url: "https://api.github.com/users"

            } )
        
        setPeople( response.data );
        } catch (e) {
            console.error("Error fetching data:", e);
        }
    };

    console.log( people );

    useEffect( () => {
        getUserdata();
    }, [] );    
    
    return (
        <div>
            <h1>GitHub Project</h1>
        </div>
    );
        
}

export default GitHubProject;
