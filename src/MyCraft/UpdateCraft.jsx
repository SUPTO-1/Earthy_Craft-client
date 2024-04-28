import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
    const craft = useLoaderData();
    const {email, name, itemName, subcategoryName, photo, stock, price, rating, customization, time , description} = craft;
    const handleUpdateCraft = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const name = form.get("name");
        const itemName = form.get("item_name");
        const subcategoryName = form.get("subcategory_Name");
        const photo = form.get("photo");
        const stock = form.get("stock");
        const price = form.get("price");
        const rating = form.get("rating");
        const customization = form.get("customization");
        const time= form.get("time");
        const description= form.get("description");
        const updateCraft = {email, name, itemName, subcategoryName, photo, stock, price, rating, customization, time , description};
        console.log(updateCraft);

        // server e pathano hobe

        fetch(`http://localhost:5000/crafts/${craft._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCraft)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
              Swal.fire({
                title: 'success!',
                text: 'Coffee Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              });
              form.reset();
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl font-poppins font-bold text-center mb-10 text-[#3A4256]">Update Craft</h2>
      <form onSubmit={handleUpdateCraft} className="card-body p-16 bg-slate-100 mx-4 rounded-lg shadow-md">
        <div className="md:flex gap-5">
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Item Name</span>
          </label>
          <input
            type="text"
            defaultValue={itemName}
            className="input input-bordered"
            name="item_name"
            required
          />
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Subcategory Name</span>
          </label>
          <input
            type="text"
            defaultValue={subcategoryName}
            className="input input-bordered"
            name="subcategory_Name"
            required
          />
        </div>
        </div>
        <div className="md:flex gap-5">
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Photo URL</span>
          </label>
          <input
            type="text"
            defaultValue={photo}
            className="input input-bordered"
            name="photo"
            required
          />
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Stock Status</span>
          </label>
          <input
            type="text"
            defaultValue={stock}
            className="input input-bordered"
            name="stock"
            required
          />
        </div>
        </div>
        <div className="lg:flex gap-5">
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Price</span>
          </label>
          <input
            type="text"
            defaultValue={price}
            className="input input-bordered"
            name="price"
            required
          />
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Rating</span>
          </label>
          <input
            type="text"
            defaultValue={rating}
            className="input input-bordered"
            name="rating"
            required
          />
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Customization</span>
          </label>
          <input
            type="text"
            defaultValue={customization}
            className="input input-bordered"
            name="customization"
            required
          />
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Processing Time</span>
          </label>
          <input
            type="text"
            defaultValue={time}
            className="input input-bordered"
            name="time"
            required
          />
        </div>
        </div>
        <div className="">
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Description</span>
          </label>
          <input
            type="text"
            defaultValue={description}
            className="input input-bordered"
            name="description"
            required
          />
        </div>
        </div>
        <div className="form-control w-full mt-6 mx-auto">
          <button className="btn btn-primary">Add Item</button>
        </div>
      </form>
    </div>
    );
};

export default UpdateCraft;