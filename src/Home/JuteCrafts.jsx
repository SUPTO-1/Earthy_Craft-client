import { useEffect, useState } from "react";
import JuteCraft from "./JuteCraft";

const JuteCrafts = () => {
    const [crafts,setCrafts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/crafts')
        .then(res=>res.json())
        .then(data=>setCrafts(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl text-center font-poppins mt-10 font-bold">Jute & Wooden Crafts</h2>
            <div>
                {
                    crafts.map(craft => <JuteCraft key={craft._id} craft={craft}></JuteCraft>)
                }
            </div>
        </div>
    );
};

export default JuteCrafts;