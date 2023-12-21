import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/prioritize_7778966 (1).png";

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink
            to="/dashboard/profiles"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold underline" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/meals"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        ></NavLink>
      </li>
      <li>
        <NavLink
          to="/upcoming"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        ></NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-full sticky inset-0 z-20 bg-glass">
      <div className=" w-full max-w-[1250px] px-[25px] mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navList}
              </ul>
            </div>
            <div className="flex items-center flex-wrap">
              <Link to="/">
                <img className="w-8 lg:w-10" src={logo} alt="" />
              </Link>
            </div>
            {/* <Link to="/" className=" normal-case text-sm md:text-3xl font-bold">
              <span className="text-primary font-bold">Hostel</span>Hub
            </Link> */}
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="flex gap-7 menu-horizontal px-1"> {navList}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end z-10">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user ? <img src={user.photoURL} /> : ""}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>{user && <span>{user?.displayName}</span>}</li>
                  <Link to="/login">
                    <li onClick={logOut}>
                      {" "}
                      <span>Sign Out</span>
                    </li>
                  </Link>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
