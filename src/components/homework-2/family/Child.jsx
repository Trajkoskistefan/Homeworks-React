import React from "react";
import Grandchild from "./Grandchild";

const Child = ({ name, age, grandchildren }) => {
    return (
        <div>
            <h2>Child: {name}</h2>
            <p>Age: {age}</p>
            <h3>Grandchildren:</h3>
            <ul>
                {grandchildren.map((grandchild, index) => (
                    <li key={index}>
                        <Grandchild name={grandchild.name} hobby={grandchild.hobby} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Child;
