import { NavLink, Outlet } from "react-router-dom";
// import TaskManagementDashboard from "./TaskManagementDashboard";
import { RxTextAlignCenter } from "react-icons/rx";

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
          Profile
        </NavLink>
      </li>
      <li className="my-4">
        <NavLink
          to="taskForm"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Create Task
        </NavLink>
      </li>
      <li className="my-4">
        <NavLink
          to="todo"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          To-Do
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
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <label
          htmlFor="my-drawer-2"
          className=" text-3xl block p-5 drawer-button lg:hidden"
        >
          <RxTextAlignCenter />
        </label>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
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
