import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AllCrafts = () => {
  const [allCrafts, setAllCrafts] = useState([]);
  useEffect(() => {
    fetch("https://earthy-craft-server.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => setAllCrafts(data));
  }, []);
  console.log(allCrafts);
  return (
    <div className="sm:p-4 md:px-16 md:py-10">
      <Helmet>
        <title>All Jute & Wooden Crafts Items</title>
      </Helmet>
      <h2 className="text-3xl text-center font-lato font-bold mb-10">
        All Jute & wooden Crafts Items
      </h2>
      <div className="border-2 overflow-x-auto shadow-md">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr >
              <th></th>
              <th className="font-lato md:text-xl font-bold">Item Name</th>
              <th className="font-lato md:text-xl font-bold">Subcategory Name</th>
              <th className="font-lato md:text-xl font-bold">Price</th>
              <th className="font-lato md:text-xl font-bold">View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                allCrafts.map((craft,index)=>{
                    return(
                        <tr key={index}>
                        <th className="font-lato text-xs md:text-lg font-medium md:font-semibold">{index+1}</th>
                        <td className="font-lato text-xs md:text-lg font-medium md:font-semibold">{craft.itemName}</td>
                        <td className="font-lato text-xs md:text-lg font-medium md:font-semibold">{craft.subcategoryName}</td>
                        <td className="font-lato text-xs md:text-lg font-medium md:font-semibold">{craft.price}</td>
                        <td className="font-lato text-xs md:text-lg font-medium md:font-semibold "><Link to={`/craftDetails/${craft._id}`}><a className="btn bg-slate-700 text-white" href="">View Details</a></Link></td>
                    </tr>
                    );
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCrafts;
