import {  useParams } from "react-router-dom";
import MyCraftSingle from "./MyCraftSingle";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const MyCraft = () => {
  // const myCraft = useLoaderData();
const {email} = useParams();
  const [singleCraft, setSingleCraft] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fetch(`https://earthy-craft-server.vercel.app/crafts/user/${email}`)
    .then(res=>res.json())
    .then(data=>{
        setSingleCraft(data)
        setLoading(false)
    })
  },[])
  if(loading)
  {
    return <progress className="progress w-56 flex justify-center items-center mx-auto mt-16"></progress>
  }
  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "Yes") {
      const filter = singleCraft.filter((craft) => craft.customization === "Yes");
      setSingleCraft(filter);
    }
    if (value === "No") {
      const filter = singleCraft.filter((craft) => craft.customization === "No");
      setSingleCraft(filter);
    }
    if(value === "Both"){
      fetch(`https://earthy-craft-server.vercel.app/crafts/user/${email}`)
    .then(res=>res.json())
    .then(data=>{
        setSingleCraft(data)
        setLoading(false)
    })
        // setSingleCraft(myCraft);
    }
  }
  return (
    <div className="md:px-16">
      <Helmet>
        <title>My Art & Craft List</title>
      </Helmet>
      <h2 className="text-3xl font-poppins font-bold text-center mb-10 text-[#3A4256]">
        My Art & Craft List
      </h2>
      <div className="text-center mb-20">
        <select onChange={handleFilter} className="select select-bordered max-w-xs">
          <option disabled selected>
            Customization
          </option>
          <option>Both</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {singleCraft.map((craft) => (
          <MyCraftSingle
            key={craft._id}
            craft={craft}
            singleCraft={singleCraft}
            setSingleCraft={setSingleCraft}
          ></MyCraftSingle>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
