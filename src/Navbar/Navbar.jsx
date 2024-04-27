import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const { user, loading,logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    } else {
      setDisplayName("");
      setPhotoURL("");
    }
  }, [user]);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: 'success!',
          text: 'Logout successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li className="font-poppins ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-poppins ">
        <NavLink to="/all">All Art & craft Items</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 md:px-16 py-10 font-lato shadow-lg mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost  text-[16px] md:text-[24px]">EarthyCraft</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {!user ? (
        <div className="navbar-end">
          <Link to="/login">
            <a className="text-[#253b34] md:text-[24px] md:font-bold font-poppins">
              Login
            </a>
          </Link>
          <span className="text-[#253b34] md:text-[24px] md:ml-2 md:font-bold font-poppins">
            /
          </span>
          <Link to="/register">
            <a className="text-[#253b34] md:text-[24px] md:ml-2 font-poppins md:font-bold">
              Sign Up
            </a>
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
            data-tip={displayName}
          >
            <div className="w-10 rounded-full">
              <img alt="" src={photoURL} />
            </div>
          </div>
          <Link onClick={handleLogOut}>
            <a className="btn w-[100px]">Logout</a>
          </Link>
        </div>
      )}
      <div className="ml-4">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        />
      </div>

    </div>
  );
};

export default Navbar;
