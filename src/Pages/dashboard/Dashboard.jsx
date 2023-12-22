import { NavLink, Outlet } from "react-router-dom";
// import TaskManagementDashboard from "./TaskManagementDashboard";
import { RxTextAlignCenter } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { SlHome } from "react-icons/sl";
import { Toaster } from "react-hot-toast";
import { IoCreateOutline } from "react-icons/io5";
import { RiTodoLine } from "react-icons/ri";
const Dashboard = () => {
  const navList = (
    <>
      <li className="my-4">
        <NavLink
          to="profiles"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          <div className="flex items-center gap-2">
            <CgProfile className="text-lg" />
            Profile
          </div>
        </NavLink>
      </li>
      <li className="my-4">
        <NavLink
          to="taskForm"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          <div className="flex items-center gap-2">
            <IoCreateOutline className="text-lg" />
            Create Task
          </div>
        </NavLink>
      </li>
      <li className="my-4">
        <NavLink
          to="todo"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          <div className="flex items-center gap-2">
            <RiTodoLine className="text-lg" />
            To-Do
          </div>
        </NavLink>
      </li>
      <div className="divider"></div>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
          }
        >
          <div className="flex items-center gap-2">
            <SlHome className="text-lg" />
            Home
          </div>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <label
          htmlFor="my-drawer-2"
          className=" text-3xl block py-2 drawer-button lg:hidden"
        >
          <RxTextAlignCenter />
        </label>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center py-16">
          <Outlet></Outlet>
          <Toaster></Toaster>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {navList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
