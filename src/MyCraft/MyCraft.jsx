import { useLoaderData } from "react-router-dom";
import MyCraftSingle from "./MyCraftSingle";
import { useState } from "react";
import { Helmet } from "react-helmet";

const MyCraft = () => {
  const myCraft = useLoaderData();
  const [singleCraft, setSingleCraft] = useState(myCraft);
  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "Yes") {
      const filter = myCraft.filter((craft) => craft.customization === "Yes");
      setSingleCraft(filter);
    }
    if (value === "No") {
      const filter = myCraft.filter((craft) => craft.customization === "No");
      setSingleCraft(filter);
    }
    if(value === "Both"){
        setSingleCraft(myCraft);
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
