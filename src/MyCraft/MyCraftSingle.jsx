const MyCraftSingle = ({craft}) => {
    const { _id, name, email, itemName, subcategoryName, price, rating, customization, time, description, photo, stock } = craft;
    return (
        <div>
            <h2>Name: {name}</h2>
        </div>
    );
};

export default MyCraftSingle;