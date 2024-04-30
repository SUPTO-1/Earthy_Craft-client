import { useEffect, useState } from "react";
import ArtCategory from "./ArtCategory";

const ArtCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://earthy-craft-server.vercel.app/subcategory')
        .then(res=>res.json())
        .then(data=>{
            setCategories(data)
            setLoading(false)
        })
    },[])
    if(loading)
    {
        return <progress className="progress w-56 flex justify-center items-center mx-auto mt-16"></progress>
    }
    return (
        <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-center font-lato mb-10">Art & Craft Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    categories.map(category=><ArtCategory key={category._id} category={category}></ArtCategory>)
                }
            </div>
        </div>
    );
};

export default ArtCategories;