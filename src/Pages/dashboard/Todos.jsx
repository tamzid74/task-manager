/* eslint-disable no-unused-vars */
import { useDrop } from "react-dnd";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useTasksQuery from "../../hook/useTasksQuery";
import Tasks from "./Tasks";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const Todos = ({ status }) => {
  const axiosSecure = useAxiosSecure();
  const { tasks, refetch } = useTasksQuery();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    axiosSecure.patch(`/tasks/${id}`, { status }).then((res) => {
      refetch();
      toast.success("List Updated...");
    });
  };
  console.log(tasks);
  const todos = tasks.filter((task) => task.status === status);
  return (
    <div ref={drop} className={`${isOver ? "" : ""}`}>
      <div className=" flex flex-col gap-5 border-2 p-2 min-h-96 min-w-80">
        <h1 className="text-3xl text-center font-bold my-2">{status}</h1>
        {todos.map((task, index) => (
          <Tasks
            key={index}
            task={task}
            refetch={refetch}
            status={status}
          ></Tasks>
        ))}
      </div>
    </div>
  );
};

export default Todos;
