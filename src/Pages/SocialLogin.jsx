import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import useAxiosPublic from "../hook/useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  // const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (media) => {
    const toastId = toast.loading("Signing in....");
    media()
      .then((result) => {
        console.log(result.user);
        toast.success("Signed in...", { id: toastId });
        navigate(from, { replace: true });
        // const userInfo = {
        //   name: result.user?.displayName,
        //   email: result.user?.email,
        //   badge: "Bronze",
        //   role: "user",
        // };
        // axiosPublic.post("/users", userInfo).then((res) => {
        //   console.log(res.data);
        // });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error.message}`, { id: toastId });
      });
  };
  return (
    <>
      <div className="divider ">Continue With</div>
      <div className="">
        <button
          onClick={() => handleLogin(googleLogin)}
          className=" btn btn-sm btn-outline w-full rounded-full font-bold flex items-center"
        >
          <FcGoogle></FcGoogle> Login with Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
