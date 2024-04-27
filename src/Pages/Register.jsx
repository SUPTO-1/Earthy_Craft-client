import { Link } from "react-router-dom";
import login from '../../public/images/signin.jpg';
const Register = () => {
    return (
        <div className="px-16 py-10 mx-2 md:mx-16 font-poppins lg:flex flex-row-reverse gap-5 border-2 rounded-lg shadow-lg">
      <div className="flex-1">
        <img className="w-full rounded-lg" src={login} alt="" />
      </div>
        <div className="flex-1">
        <h2 className="text-3xl text-center font-poppins mt-4 lg:mt-0 font-bold">Register Now</h2>
      <form className="card-body">
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
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
            <span className="label-text text-xl">Email</span>
          </label>
          <input
            type="text"
            placeholder="Give Photo Url"
            className="input input-bordered"
            name="photo"
            required
          />
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input input-bordered"
            name="password"
            required
          />
        </div>
        <div  className="form-control w-full mt-6 mb-2 mx-auto">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center text-lg">Already have an account?<Link to='/login' className="text-blue-500 ml-2 font-bold">Login</Link></p>
        </div>
    </div>
    );
};

export default Register;