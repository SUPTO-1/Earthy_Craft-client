import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../public/images/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const LogIn = () => {
  const { logIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const githubProvider = new GithubAuthProvider();
  const provider = new GoogleAuthProvider();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // toast.success("User logged in successfully");
        // alert("User logged in successfully");
        // toast("User logged in successfully");
        Swal.fire({
          title: "success!",
          text: "User logged in successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Password and E-mail doesn't Match");
        Swal.fire({
          title: "error!",
          text: "Password and E-mail doesn't Match",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  const handleGoogle = () => {
    googleSignIn(provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "success!",
          text: "User logged in successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "error!",
          text: "Password and E-mail doesn't Match",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  const handleGithub = () => {
    githubSignIn(githubProvider)
      .then(() => {
        // const loggedUser = result.user;
        // console.log(loggedUser);
        alert("User logged in successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Password and E-mail doesn't Match");
      });
  };
  return (
    <div className="px-16 py-6 mx-2 md:mx-16 font-poppins lg:flex flex-row-reverse gap-5 border-2 rounded-lg shadow-lg">
      <div className="flex-1">
        <img className="w-full rounded-lg" src={login} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl text-center font-poppins mt-4 lg:mt-0 font-bold">
          LogIn Now
        </h2>
        <form onSubmit={handleLogin} className="card-body">
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
          <div className="form-control w-full mt-6 mx-auto">
            <button className="btn btn-primary">Login</button>
          </div>
          <button onClick={handleGoogle} className="btn mb-2 w-full mx-auto">
          <FcGoogle className="text-xl" />
          Login With Google
        </button>
        <button onClick={handleGithub} className="btn w-full mx-auto">
          <FaGithub className="text-xl" />
          Login With Github
        </button>
        </form>
        <p className="text-center text-lg">
          Do not have an account?
          <Link to="/register" className="text-blue-500 ml-2 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
