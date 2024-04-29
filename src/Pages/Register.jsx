import { Link } from "react-router-dom";
import login from "../../public/images/signin.jpg";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
// import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const {createUser,setUser} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const photo = formData.get("photo");
    console.log(name, email, password, photo);

    // password validation 
    const passwordCheckerUpper = /^(?=.*[A-Z]).*$/;
    const passwordCheckerLower = /^(?=.*[a-z]).*$/;

    if (password.length < 6) {
        Swal.fire({
            title: 'Error!',
            text: 'Password must be at least 6 characters',
            icon: 'Error',
            confirmButtonText: 'Okay'
          })
        return;
      }
      else if (!passwordCheckerUpper.test(password)) {
        Swal.fire({
            title: 'Error!',
            text: 'Password must contain at least one uppercase letter',
            icon: 'Error',
            confirmButtonText: 'Okay'
          })
        return;
      }
      else if (!passwordCheckerLower.test(password)) {
        Swal.fire({
            title: 'Error!',
            text: 'Password must contain at least one lowercase letter',
            icon: 'Error',
            confirmButtonText: 'Okay'
          })
        return;
      }

      //authentication here starts

      createUser(email, password , name , photo)
        .then((result) => {
          const createdUser = result.user;
          setUser(createdUser)
          // console.log(createdUser);
          Swal.fire({
            title: 'success!',
            text: 'User created successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'Error',
            confirmButtonText: 'Okay'
          })
        })


    //authentication here ends
  }
  return (
    <div className="md:px-16 py-10 mx-2 md:mx-16 font-poppins lg:flex flex-row-reverse gap-5 border-2 rounded-lg shadow-lg">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="flex-1">
        <img className="w-full rounded-lg" src={login} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl text-center font-poppins mt-4 lg:mt-0 font-bold">
          Register Now
        </h2>
        <form onSubmit={handleRegister} className="card-body">
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
              <span className="label-text text-xl">Photo</span>
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
          <div className="form-control w-full mt-6 mb-2 mx-auto">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center text-lg">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-2 font-bold">
            Login
          </Link>
        </p>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Register;
