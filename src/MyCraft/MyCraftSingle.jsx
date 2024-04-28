import { FaStar } from "react-icons/fa6";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftSingle = ({ craft , singleCraft , setSingleCraft }) => {
  const {
    _id,
    itemName,
    price,
    rating,
    customization,
    photo,
    stock,
  } = craft;
  const handleDelete = (_id) => {
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result =>{
          if(result.isConfirmed){
            fetch(`http://localhost:5000/crafts/${_id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                      });
                      const remaining = singleCraft.filter(craft => craft._id !== _id);
                      setSingleCraft(remaining);
                }
            })
          }
      })
  }
  return (
    <div className="card rounded-lg bg-base-100 shadow-lg border-2">
      <div className="card-body mb-2">
        <img className="h-[400px] rounded-lg" src={photo} alt="" />
      </div>
      <div className="p-8">
        <h2 className="text-2xl text-center font-poppins font-bold mb-6 text-[#3A4256]">
          {itemName}
        </h2>
        <div className="flex justify-between mb-10">
          <h2 className="text-xl text-[#3A4256] font-lato font-bold">
            Price:{" "}
            <TbCoinTakaFilled className="inline text-3xl text-[#3A4256]" />{" "}
            {price}
          </h2>
          <h2 className="text-2xl text-[#3A4256] font-lato font-bold">
            {" "}
            {rating} <FaStar className="-mt-2 inline text-2xl text-[#3A4256]" />
          </h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-xl text-[#3A4256] font-lato font-bold">
            Customization : {customization}
          </h2>
          <h2 className="text-xl text-[#3A4256] font-lato font-bold">
            Stock: {stock}
          </h2>
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={()=>handleDelete(_id)} className="btn bg-slate-700 text-white ">Delete</button>
          <Link to={`/updateCraft/${_id}`}><button className="btn bg-slate-700 text-white ">Update</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MyCraftSingle;
