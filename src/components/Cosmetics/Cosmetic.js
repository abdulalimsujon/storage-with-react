import React from 'react';
import { addToDb } from '../utilities/fakedb';
import './cosmetic.css';

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic;
    const AddToCart = (id) => {
        addToDb(id, 1);
    }
    return (
        <div class='product'>
            <h1>buy this :{name} </h1>
            <h2>Only for :{price}</h2>
            <h3>id : {id}</h3>
            <button onClick={() => AddToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;