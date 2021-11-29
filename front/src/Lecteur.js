import React, { useState } from 'react';
import ReactPlayer from "react-player";

function Lecteur () {
    const [number, setNumber] = useState(700);
    const source =
        "http://localhost:3000/api/onepiece?video=one%20piece%20" +
        number +
        ".mp4&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ozg5fxQeyDOTjcpdESPccXCNYTYJmIOzYBNFYOzBM8Y"

    return (
        <div className="Lecteur">
            <header className="Lecteur-header "/>
            <button onClick = {() => setNumber(number - 1)}>previous</button>
            <ReactPlayer
                url= {source}
                playing = "true"
                controls = "true"
            />
            <button onClick = {() => setNumber(number + 1)}>next</button>
            <p>
                Voici la pièce {number}
            </p>
        </div>

    );
};

export default Lecteur;