import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
