const addToDb = id => {

    const quantity = localStorage.getItem(id);
    if (quantity) {
        // console.log('already exist');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    } else {
        localStorage.setItem(id, 1);
        //console.log('new item');
    }

}

export { addToDb }