import React, { useState } from 'react';
import ReactPlayer from "react-player";
import { InputNumber } from 'rsuite';


function Lecteur () {
    const [number, setNumber] = useState(700);
    const urlOP1 = "http://localhost:3000/api/onepiece?video=one%20piece%20"
    const urlOP2 = ".mp4&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ozg5fxQeyDOTjcpdESPccXCNYTYJmIOzYBNFYOzBM8Y"
    const source = urlOP1 + number + urlOP2

    return (
        <div className="Lecteur">
            <header className="Lecteur-header"/>
            <InputNumber
            defaultValue = {number}
            min = "1"
            max = "730"
            scrollable = "true"
            onChange = {(value) => setNumber(value)}
            />
            
            <div class = "flex space-x-5 space-y-5 inline-block;" className = "previousNext">
                <button onClick = {() => setNumber(number - 1)}>previous</button>
                <ReactPlayer
                    url= {source}
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