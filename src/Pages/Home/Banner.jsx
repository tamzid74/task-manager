import { Link } from "react-router-dom";
import image from "../../assets/images/10780039_19197470.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="w-full">
          <img src={image} />
        </div>
        <div className="w-full">
          <h1 className="text-5xl font-dm font-extrabold">
            Simplify Your Life with Our User-Friendly Website
          </h1>
          <p className="py-6 font-sans text-base text-gray-500">
            Introducing our task management website designed for simplicity and
            efficiency! Easily organize your tasks, set priorities, and stay on
            top of your to-do list effortlessly. Our user-friendly interface
            ensures a seamless experience, helping you boost productivity and
            manage your time with ease. Say goodbye to the chaos of task
            management and hello to a more organized and stress-free life!
          </p>

          <div className="indicator">
            <Link to="/dashboard/profiles">
              <button className="cursor-pointer rounded-full font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
                <span className="relative z-10 text-green-500 group-hover:text-white text-base duration-500">
                  Let’s Explore
                </span>
                <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
