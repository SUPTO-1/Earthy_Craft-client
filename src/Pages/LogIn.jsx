import { Link } from "react-router-dom";
import login from '../../public/images/login.jpg'
const LogIn = () => {
  return (
    <div className="md:px-16 ">
      <div className="hero min-h-screen bg-base-200 font-poppins rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-24">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-poppins font-bold text-[#253b34] md:mb-4">Login now!</h1>
            <p className="py-6 text-[18px]">
            Explore the timeless elegance of jute and wooden crafts at our website. From exquisite home decor to eco-friendly accessories, discover artisanal pieces that blend sustainability with style. Sign in now to unlock exclusive offers and indulge in the beauty of natural materials reimagined for modern living.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center mt-4">Do not have an account? <Link to="/register" className="text-primary font-bold">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
