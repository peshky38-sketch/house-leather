import { useState } from "react";
/*
how to pass state from one component to another in react
*/
function ColorsandCircles() {
    const [ colors, setColors ] = useState( [] );
    const [ color, setColor ] = useState( "" );
    const [ radius, setRadius ] = useState( "" );
    console.log("Color Rendered:", new Date().toLocaleTimeString());
    console.log("Radius Rendered:", new Date().toLocaleTimeString());

    const onSubmit = ( e ) => {
        e.preventDefault();
        setColors( [ ...colors, { color, radius } ] );
        setColor( "" );
        setRadius( "" );
    };
const handleColorChange = ( e ) => {
        setColor( e.target.value );
    };

    const handleRadiusChange = ( e ) => {
        setRadius( e.target.value );
    };  
    return (
        <div>
            <h1>Colors and Circles</h1>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Color"
                    value={ color }
                    onChange={ handleColorChange }
                />
                <input
                    type="number"
                    placeholder="Radius"
                    value={ radius }
                    onChange={ handleRadiusChange }
                />
                <button onClick={ onSubmit }>Save Circle</button>
                <button type="button" onClick={ () => setColors( [] ) }>
                    Clear Circle
                </button>
            </form>
            <div>
                { colors.map( ( c, index ) => (
                    <div
                        key={ index }
                        style={ {
                            backgroundColor: c.color,
                            width: `${ c.radius * 2 }px`,
                            height: `${ c.radius * 2 }px`,
                            borderRadius: "50%",
                            margin: "10px",
                        } }
                    ></div>
                ) ) }
            </div>
        </div>
    );
}

export default ColorsandCircles;

