import React, { useEffect, useState } from 'react';
import Cosmetic from './Cosmetic';

const Cosmetics = () => {

    const [cosmetics, SetCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => SetCosmetics(data))

    }, []);


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