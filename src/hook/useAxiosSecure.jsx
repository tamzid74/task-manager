import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://todo-server-side-mu.vercel.app/",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
