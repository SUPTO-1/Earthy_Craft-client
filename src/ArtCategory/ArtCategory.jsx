import { Link } from "react-router-dom";
import { Bounce } from "react-awesome-reveal";
const ArtCategory = ({category}) => {
    const {photo, subcategoryName} = category
    return (
            <Link to={`/singleartcategory/${subcategoryName}`}><div className="card border-2 bg-base-100 rounded-lg p-4">
        <img className="sm:h-[300px] md:h-[400px] rounded-lg" src={photo} alt="" />
        <hr className="my-6 border-[1px]" />
        <h2 className="text-2xl font-poppins font-bold text-[#3A4256]">{subcategoryName}</h2>
    </div></Link>
    );
};

export default ArtCategory;