import { useLoaderData } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
const CraftDetails = () => {
    const craft = useLoaderData();
    const {email,name,itemName, subcategoryName, price, rating, customization, time, description,photo,stock} = craft;
    return (
        <div className="sm:mx-4 sm:py-4 md:mx-16 md:py-16 bg-base-200 shadow-md">
            <h2 className="text-3xl font-poppins font-bold text-center mb-24 text-[#3A4256]">Details of {itemName}</h2>
            <div className="px-16 md:flex gap-10">
            <div className="flex-1 border-2 border-slate-200 p-10 rounded-lg sm:mb-6 md:mb-0">
                <img src={photo} alt="" />
            </div>
            <div className="flex-1">
                <div className="md:flex sm:mt-6 md:mt-0 justify-between">
                <h1 className="text-xl text-[#3A4256] font-lato font-bold">Created by : {name} </h1>
                <h1 className="text-xl text-[#3A4256] font-lato font-bold"><MdEmail className="text-xl text-[#3A4256] inline" /> : {email}</h1>
                </div>
                <hr className="my-5 border-[1px]" />
                <div className="md:flex justify-between">
                <h1 className="text-xl text-[#3A4256] font-lato font-bold mb-4">Item Name : {itemName}</h1>
                <h1 className="text-xl text-[#3A4256] font-lato font-bold">SubCategory Name: {subcategoryName}</h1>
                </div>
                <h4 className="text-lg text-[#3A4256] font-lato font-bold mb-4">Description:</h4>
                <p className="text-lg text-[#3A4256] font-poppins font-semibold border-2 p-4 rounded-lg shadow-md">{description}</p>
                <hr className="my-8 border-[1px]" />
                <div className="md:flex justify-between mb-10">
                    <h2 className="text-xl text-[#3A4256] font-lato font-bold">Price: <TbCoinTakaFilled className="inline text-3xl text-[#3A4256]"/> {price}</h2>
                    <h2 className="text-2xl text-[#3A4256] font-lato font-bold"> {rating} <FaStar className="-mt-2 inline text-2xl text-[#3A4256]"/></h2>
                </div>
                <div className="md:flex justify-between mb-5">
                    <h2 className="text-xl text-[#3A4256] font-lato font-bold">Time: <IoTime className="inline text-3xl text-[#3A4256]"/> {time}</h2>
                    <h2></h2>
                    <h2 className="text-xl text-[#3A4256] font-lato font-bold">Customization : {customization}</h2>
                </div>
                <div className="text-center border-2 shadow-md p-4">
                    <h2 className="text-xl text-[#3A4256] font-lato font-bold">Stock: {stock}</h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CraftDetails;