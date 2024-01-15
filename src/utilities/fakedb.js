// use local storage to manage  data
const addToDb = id => {
    let DataCollection = getCollection();
    // add quantity
    const quantity = DataCollection[id];
    if (!quantity) {
        DataCollection[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        DataCollection[id] = newQuantity;
    }
    localStorage.setItem('Data-Collection', JSON.stringify(DataCollection));
}

const removeFromDb = id => {
    const DataCollection = getCollection();
    if (id in DataCollection) {
        delete DataCollection[id];
        localStorage.setItem('Data-Collection', JSON.stringify(DataCollection));
    }
}

const getCollection = () => {
    let DataCollection = {};

    //get the shopping cart from local storage
    const storedCollection = localStorage.getItem('Data-Collection');
    if (storedCollection) {
        DataCollection = JSON.parse(storedCollection);
    }
    return DataCollection;
}

const deleteCollection = () => {
    localStorage.removeItem('Data-Collection');
}

export {
    addToDb,
    removeFromDb,
    getCollection,
    deleteCollection
}
