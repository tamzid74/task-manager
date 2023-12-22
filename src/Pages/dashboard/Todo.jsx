import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Todo = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user.email}`);
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/task/${id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* box-1 */}
        <div className=" flex flex-col gap-5 border-2 p-2 min-h-96 min-w-80">
          <h1 className="text-3xl text-center font-bold my-2">To-do</h1>
          {tasks.map((task) => (
            <div key={task.id}>
              <div className="rounded-lg rounded-t-md border-t-4 border-primary-red p-7 shadow-xl">
                <div className="mb-8">
                  <h3 className="mb-1.5 text-xl font-semibold text-neutral-darkBlue">
                    {task.title}
                  </h3>
                  <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50">
                    {task.description}
                  </p>
                  <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50">
                    <span className="font-bold">DeadLine:</span> {task.deadline}
                  </p>
                  <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50">
                    <span className="font-bold">Priority:</span> {task.priority}
                  </p>
                </div>
                <RiDeleteBin6Line
                  onClick={() => handleDelete(task._id)}
                  className="hover:cursor-pointer hover:text-red-600"
                />
              </div>
            </div>
          ))}
        </div>
        {/* box-2 */}
        <div className="border-2 p-2 min-h-96 min-w-80">
          <h1 className="text-3xl text-center font-bold my-2">OnGoing</h1>
        </div>
        {/* box-3 */}
        <div className="border-2 p-2 min-h-96 min-w-80">
          <h1 className="text-3xl text-center font-bold my-2">Complete</h1>
        </div>
      </div>
    </DndProvider>
  );
};

export default Todo;
