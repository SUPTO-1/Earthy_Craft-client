import { useEffect, useState } from "react";
import ArtCategory from "./ArtCategory";

const ArtCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/subcategory')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-center font-lato mb-10">Art & Craft Categories</h2>
            <div>
                {
                    categories.map(category=><ArtCategory key={category._id} category={category}></ArtCategory>)
                }
            </div>
        </div>
    );
};

export default ArtCategories;