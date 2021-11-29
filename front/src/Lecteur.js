import React, { useState } from "react";
import ReactPlayer from "react-player";
import NumericInput from "react-numeric-input";

function Lecteur () {
    const [number, setNumber] = useState(700);
    const source =
        "http://localhost:3000/api/onepiece?video=one%20piece%20" +
        number +
        ".mp4&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ozg5fxQeyDOTjcpdESPccXCNYTYJmIOzYBNFYOzBM8Y"

    return (
        <div className="Lecteur">
            <header className="Lecteur-header "/>
            
            <NumericInput className="form-control"/>
            <div className = "player_previous_next">
                <button onClick = {() => setNumber(number - 1)}>previous</button>
                <ReactPlayer
                    url= {source}
                    playing = "true"
                    controls = "true"
                />
                <button onClick = {() => setNumber(number + 1)}>next</button>
            </div>
            <p>
                Voici la pièce {number}
            </p>
        </div>

    );
};

export default Lecteur;