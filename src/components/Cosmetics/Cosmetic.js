import React from 'react';

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic;
    return (
        <div>
            <h1>buy this :{name} </h1>
            <h2>Only for :{price}</h2>
            <h3>id : {id}</h3>
        </div>
    );
};

export default Cosmetic;