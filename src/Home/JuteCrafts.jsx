import { useEffect, useState } from "react";
import JuteCraft from "./JuteCraft";

const JuteCrafts = () => {
    const [crafts, setCrafts] = useState([]);
    const [allData, setAllData] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/crafts')
            .then(res => res.json())
            .then(data => setCrafts(data))
    }, []);

    const handleViewAll = () => {
        setAllData(!allData);
    };

    return (
        <div>
            <h2 className="text-3xl text-center font-poppins mt-10 font-bold mb-10">Jute & Wooden Crafts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allData ? (
                        crafts.map(craft => <JuteCraft key={craft._id} craft={craft}></JuteCraft>)
                    ) : (
                        crafts.slice(0, 6).map(craft => <JuteCraft key={craft._id} craft={craft}></JuteCraft>)
                    )
                }
            </div>
            <div className="text-center">
                <button onClick={handleViewAll} className="btn bg-[#3A4256] text-white mt-10">
                    {allData ? "View Less" : "View All"}
                </button>
            </div>
        </div>
    );
};

export default JuteCrafts;
