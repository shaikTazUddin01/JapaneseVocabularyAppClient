import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { logout } from "../../redux/Features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentUser = useUser();
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  // console.log(currentUser);

  // Navigation items
  const navItems = (
    <>
      <li>
        <a href="/">Lessons</a>
      </li>
      <li>
        <a href="/tutorials">Tutorials</a>
      </li>
    </>
  );

  const handleLogOut = () => {
    toast.warning("logout", { duration: 3000 });
    setToggle(false);
    dispatch(logout());
    navigate('/login')
  };

  return (
    <div className="navbar bg-gray-800 shadow-sm sticky top-0 z-30 text-white">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile View */}
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        {/* Brand Name */}
        <a href="/" className="btn btn-ghost text-xl">
          日本語 Learn
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px]">{navItems}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end relative">
        {currentUser ? (
          <img
            src={currentUser?.image}
            alt="User Avatar"
            className="h-10 w-10 rounded-full object-cover"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <a href="/login" className="btn">
            Login
          </a>
        )}
        {/* toggle */}
        {toggle && (
          <div className=" shadow-xl rounded-md absolute top-10 p-5 z-20 bg-gray-800 text-white border ">
            <h1> {currentUser?.name}</h1>
            <h1>{currentUser?.email}</h1>

            <div className="h-[1px] w-full bg-[#a8a8a8] my-1"></div>
            <button
              className="bg-blue-600 px-2 py-[2px] rounded-md text-white w-full"
              onClick={() => handleLogOut()}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
