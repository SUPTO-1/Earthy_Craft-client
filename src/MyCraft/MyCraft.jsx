import { useLoaderData } from "react-router-dom";
import MyCraftSingle from "./MyCraftSingle";
import { useState } from "react";

const MyCraft = () => {
    const myCraft = useLoaderData();
    const [singleCraft , setSingleCraft] = useState(myCraft);
    return (
        <div className="px-16">
            <h2 className="text-3xl font-poppins font-bold text-center mb-24 text-[#3A4256]">My Art & Craft List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    singleCraft.map(craft => <MyCraftSingle key={craft._id} craft={craft} singleCraft={singleCraft} setSingleCraft={setSingleCraft}></MyCraftSingle>)
                }
            </div>
        </div>
    );
};

export default MyCraft;