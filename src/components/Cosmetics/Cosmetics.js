import React from 'react';
import Cosmetic from './Cosmetic';

const Cosmetics = () => {

    const cosmetics = [

        {
            "id": "62c027f508a3c407508a3990",
            "price": 37,
            "name": "Franco Lowe"
        },
        {
            "id": "62c027f5fa1b4a1ed6009ead",
            "price": 21,
            "name": "Ashley Gould"
        },
        {
            "id": "62c027f5588b423394db2688",
            "price": 37,
            "name": "Marion Morrison"
        },
        {
            "id": "62c027f5714a11c5bbbb6f72",
            "price": 33,
            "name": "Sheena Koch"
        },
        {
            "id": "62c027f5236446f5e840e034",
            "price": 23,
            "name": "Reyna Nieves"
        }
    ]


    return (

        <div>
            <h1>Welocome to my shop</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;