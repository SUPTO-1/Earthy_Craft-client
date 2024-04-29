const ArtCategory = ({category}) => {
    const {img, subcategoryName} = category
    return (
        <div>
            <h2>{subcategoryName}</h2>
        </div>
    );
};

export default ArtCategory;