import React from "react";

const Grandchild = ({ name, hobby }) => {
    return (
        <div>
            <h4>Grandchild: {name}</h4>
            <p>Favorite Hobby: {hobby}</p>
        </div>
    );
};

export default Grandchild;
