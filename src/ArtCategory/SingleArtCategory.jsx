import { useLoaderData, useParams } from "react-router-dom";
import SpecificSubCategory from "./SpecificSubCategory";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
const SingleArtCategory = () => {
    const subcategoryCraft = useLoaderData();
    const subcategoryName = useParams().subcategoryName;
    // console.log(subcategoryCraft);
    return (
        <div className="md:my-16 md:px-16">
            <Helmet>
                <title>{subcategoryName}</title>
            </Helmet>
            <h1 className="text-3xl text-center font-lato font-bold mb-10"><Typewriter
            words={[subcategoryName]}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    subcategoryCraft.map(craft => <SpecificSubCategory key={craft._id} craft={craft}></SpecificSubCategory>)
                }
            </div>
        </div>
    );
};

export default SingleArtCategory;