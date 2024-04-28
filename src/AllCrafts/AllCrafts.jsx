import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCrafts = () => {
  const [allCrafts, setAllCrafts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => setAllCrafts(data));
  }, []);
  console.log(allCrafts);
  return (
    <div className="sm:p-4 md:px-16 md:py-10">
      <h2 className="text-3xl text-center font-lato font-bold mb-10">
        All Jute & wooden Crafts Items
      </h2>
      <div className="border-2 shadow-md">
        <table className="md:table w-full">
          {/* head */}
          <thead>
            <tr >
              <th></th>
              <th className="font-lato md:text-xl font-bold">Item Name</th>
              <th className="font-lato md:text-xl font-bold">Subcategory Name</th>
              <th className="font-lato md:text-xl font-bold">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                allCrafts.map((craft,index)=>{
                    return(
                        <tr key={index}>
                        <th className="font-lato md:text-lg font-semibold">{index+1}</th>
                        <td className="font-lato md:text-lg font-semibold">{craft.itemName}</td>
                        <td className="font-lato md:text-lg font-semibold">{craft.subcategoryName}</td>
                        <td className="font-lato md:text-lg font-semibold">{craft.price}</td>
                        <td className="font-lato md:text-lg font-semibold "><Link to={`/craftDetails/${craft._id}`}><a className="btn btn-primary" href="">View Details</a></Link></td>
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
