import { useLoaderData } from "react-router-dom";
import { MdEmail } from "react-icons/md";
const CraftDetails = () => {
    const craft = useLoaderData();
    const {email,name,itemName, subcategoryName, price, rating, customization, time, description,photo} = craft;
    return (
        <div className="px-16 py-16 bg-base-200">
            <h2 className="text-3xl font-poppins font-bold text-center mb-24 text-[#3A4256]">Details of {itemName}</h2>
            <div className="px-16 flex gap-10">
            <div className="flex-1 border-2 border-slate-200 p-10 rounded-lg">
                <img src={photo} alt="" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between">
                <h1 className="text-xl text-[#3A4256] font-lato font-bold">Created by : {name} </h1>
                <h1 className="text-xl text-[#3A4256] font-lato font-bold"><MdEmail className="text-xl text-[#3A4256] inline" /> : {email}</h1>
                </div>
                <hr className="my-5 border-[1px]" />
                <h1 className="text-3xl font-lato font-bold">{price}</h1>
                <h1 className="text-3xl font-lato font-bold">{rating}</h1>
                <h1 className="text-3xl font-lato font-bold">{customization}</h1>
                <h1 className="text-3xl font-lato font-bold">{time}</h1>
                <h1 className="text-3xl font-lato font-bold">{description}</h1>
            </div>
            </div>
        </div>
    );
};

export default CraftDetails;