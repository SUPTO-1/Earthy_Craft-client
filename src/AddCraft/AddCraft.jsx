import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
const AddCraft = () => {
  const handleAddCraft = (e) => {
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
    const newCraft = {email, name, itemName, subcategoryName, photo, stock, price, rating, customization, time , description};
    console.log(email, name, itemName, subcategoryName, photo, stock, price, rating, customization, time);

    //send to the data
    fetch('https://earthy-craft-server.vercel.app/crafts', {
      method: 'POST',
      headers:
      {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCraft)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.acknowledged){
        Swal.fire({
          title: 'success!',
          text: 'User created successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
        document.querySelectorAll('input').forEach(input => input.value = '');
      }
    })
  }
  return (
    <div>
      <Helmet>
        <title>Add Craft</title>
      </Helmet>
      <h2 className="text-3xl font-poppins font-bold text-center mb-10 text-[#3A4256]">Add Craft</h2>
      <form onSubmit={handleAddCraft} className="card-body md:p-16 bg-slate-100 mx-4 rounded-lg shadow-md">
        <div className="md:flex gap-5">
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        </div>
        <div className="md:flex gap-5">
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Item Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Item Name"
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
            placeholder="Enter Subcategory Name"
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
            placeholder="Enter Photo Url"
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
            placeholder="Stock Status"
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
            placeholder="Price"
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
            placeholder="Rating"
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
            placeholder="Customization"
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
            placeholder="Processing Time"
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
            placeholder="Description"
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

export default AddCraft;
