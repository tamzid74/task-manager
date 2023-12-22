import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useTasksQuery = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user?.email}`);
      return res.data;
    },
  });

  return { tasks, refetch };
};

export default useTasksQuery;
