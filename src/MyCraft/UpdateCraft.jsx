const UpdateCraft = () => {
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

export default UpdateCraft;