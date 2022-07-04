const addToDb = id => {

    let shoppingCart = {};

    //get shopping cart from local storage
    const storedCard = localStorage.getItem('shopping-cart');

    if (storedCard) {
        shoppingCart = JSON.parse(storedCard);

    } else {
        shoppingCart = {};

    }



    // add quantity

    const quantity = shoppingCart[id];
    if (quantity) {
        // console.log('already exist');
        const newQuantity = parseInt(quantity) + 1;

        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    } else {

        shoppingCart[id] = 1;
        //localStorage.setItem(id, 1);
        //console.log('new item');
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

export { addToDb }