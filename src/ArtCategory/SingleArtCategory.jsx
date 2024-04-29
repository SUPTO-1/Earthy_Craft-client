import { useLoaderData, useParams } from "react-router-dom";
import SpecificSubCategory from "./SpecificSubCategory";

const SingleArtCategory = () => {
    const subcategoryCraft = useLoaderData();
    const subcategoryName = useParams().subcategoryName;
    // console.log(subcategoryCraft);
    return (
        <div className="md:my-16 md:px-16">
            <h1 className="text-3xl text-center font-lato font-bold mb-10">{subcategoryName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    subcategoryCraft.map(craft => <SpecificSubCategory key={craft._id} craft={craft}></SpecificSubCategory>)
                }
            </div>
        </div>
    );
};

export default SingleArtCategory;