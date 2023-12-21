/* eslint-disable react/prop-types */
// TaskForm.js
import { useForm } from "react-hook-form";

const TaskForm = ({ onAddTask }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onAddTask(data);
    reset(); // Reset form after submitting
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title:</label>
      <input {...register("title", { required: true })} />

      <label>Description:</label>
      <input {...register("description")} />

      <label>Deadline:</label>
      <input type="date" {...register("deadline")} />

      <label>Priority:</label>
      <select {...register("priority")}>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
