import { FaStar } from "react-icons/fa6";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
const SpecificSubCategory = ({craft}) => {
    const {photo,itemName,subcategoryName,price,stock,rating,customization,time,description} = craft;
    return (
        <div className="card rounded-lg bg-base-100 shadow-lg border-2">
      <div className="card-body">
        <img className="sm:h-[300px] md:h-[400px] rounded-lg" src={photo} alt="" />
      </div>
      <div className="p-8">
        <h2 className="text-2xl text-center font-poppins font-bold mb-6 text-[#3A4256]">
          {itemName}
        </h2>
        <p className="text-sm md:text-lg text-[#3A4256] font-poppins font-medium mb-6">{description}</p>
        <div className="flex justify-between mb-10">
          <h2 className="text-sm md:text-xl text-[#3A4256] font-lato font-bold">
            Price:{" "}
            <TbCoinTakaFilled className="inline text-sm md:text-xl text-[#3A4256]" />{" "}
            {price}
          </h2>
          <h2 className="text-sm md:text-xl text-[#3A4256] font-lato font-bold">
            {" "}
            {rating} <FaStar className="-mt-2 inline text-sm md:text-xl text-[#3A4256]" />
          </h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-sm md:text-xl text-[#3A4256] font-lato font-bold">
            Customization : {customization}
          </h2>
          <h2 className="text-sm md:text-xl text-[#3A4256] font-lato font-bold">
            Stock: {stock}
          </h2>
        </div>
        <div className="flex justify-between mt-6">
        <h2 className="text-sm md:text-xl text-[#3A4256] font-lato font-bold">
            Subcategory : {subcategoryName}
          </h2>
          <h2 className="text-sm md:text-xl text-[#3A4256] font-lato font-bold">
            Time: {time}
          </h2>
        </div>
      </div>
      <Link to={`/craftDetails/${craft._id}`}><button className="btn bg-slate-700 text-white m-6">View Details</button></Link>
    </div>
    );
};

export default SpecificSubCategory;