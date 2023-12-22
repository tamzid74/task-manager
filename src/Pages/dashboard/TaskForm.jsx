// TaskForm.js
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import toast from "react-hot-toast";

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    console.log(data);
    const todo = {
      title: data.title,
      description: data.description,
      email: user?.email,
      deadline: data.deadline,
      priority: data.priority,
      status: "To-do",
    };
    axiosSecure.post("/tasks", todo).then((res) => {
      console.log(res.data);
      reset(); // Reset form after submitting
      toast.success("Successfully added in todo list!");
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>Dashboard|Create Todo</title>
      </Helmet>
      <h1 className="text-primary font-bold text-3xl text-center my-10">
        Create Todo
      </h1>
      <div className="divider"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
                className="input input-bordered w-full rounded-2xl "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Description"
                {...register("description")}
                className="input input-bordered w-full rounded-2xl "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Deadline:</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                {...register("deadline")}
                className="input input-bordered w-full rounded-2xl "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Priority:</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("priority")}
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-5 w-full">
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
