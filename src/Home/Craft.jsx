const Craft = ({ craft }) => {
    const { name, subcategoryName, photo, price, rating, customization, time, description } = craft
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Craft;