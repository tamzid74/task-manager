/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useDrag } from "react-dnd";

const Tasks = ({ task, refetch }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);
  const axiosSecure = useAxiosSecure();
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
    <div
      ref={drag}
      className={`rounded-lg rounded-t-md border-t-4 border-primary-red p-7 ${
        isDragging ? "opacity-25" : "opacity-100"
      } shadow-xl cursor-grab`}
    >
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
  );
};

export default Tasks;
