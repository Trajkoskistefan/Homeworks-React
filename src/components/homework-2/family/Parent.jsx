import React from "react";
import Child from "./Child";

const Parent = ({ family }) => {
    return (
        <div>
            <h1>Parent: {family.name}</h1>
            <h2>Children:</h2>
            {family.children.map((child, index) => (
                <Child key={index} name={child.name} age={child.age} grandchildren={child.grandchildren} />
            ))}
        </div>
    );
};

export default Parent;
