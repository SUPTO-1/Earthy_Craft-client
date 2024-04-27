import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from '../../public/images/login.jpg';
const LogIn = () => {
  return (
    <div className="px-16 py-10 mx-2 md:mx-16 font-poppins lg:flex flex-row-reverse gap-5 border-2 rounded-lg shadow-lg">
      <div className="flex-1">
        <img className="w-full rounded-lg" src={login} alt="" />
      </div>
        <div className="flex-1">
        <h2 className="text-3xl text-center font-poppins mt-4 lg:mt-0 font-bold">LogIn Now</h2>
      <form className="card-body">
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
        <button className="btn mb-2 w-full mx-auto">
          <FcGoogle className="text-xl" />
          Login With Google
        </button>
        <button className="btn w-full mx-auto">
          <FaGithub className="text-xl" />
          Login With Github
        </button>
      </form>
      <p className="text-center text-lg">Do not have an account?<Link to='/register' className="text-blue-500 ml-2 font-bold">Register</Link></p>
        </div>
    </div>
  );
};

export default LogIn;
