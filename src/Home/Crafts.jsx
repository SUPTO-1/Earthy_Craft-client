import { useEffect } from "react";
import { useState } from "react";
import Craft from "./Craft";

const Crafts = () => {
    const [crafts, setCrafts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/crafts")
        .then(res=>res.json())
        .then(data=>{
            setCrafts(data)
        })
    },[])
    return (
        <div className="border-2 rounded-lg bg-slate-100 mt-32">
            <h2 className="text-center text-3xl font-poppins font-bold mt-16 mb-16">Our Craft Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    crafts.map(craft => <Craft key={craft._id} craft={craft}></Craft>)
                }
            </div>
        </div>
    );
};

export default Crafts;