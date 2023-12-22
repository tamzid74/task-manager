import Lottie from "lottie-react";
import comingSoon from "../assets/images/Animation - 1703231180422.json";

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lottie w-[700px] ">
        <Lottie animationData={comingSoon} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default About;
