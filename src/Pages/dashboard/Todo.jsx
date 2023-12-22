/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useDrop } from "react-dnd";
import Todos from "./Todos";

const Todo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* box-1 */}
      <Todos
        className="border-2 p-2 min-h-96 min-w-80"
        status={"To-do"}
      ></Todos>
      {/* box-2 */}
      <Todos
        className="border-2 p-2 min-h-96 min-w-80"
        status={"OnGoing"}
      ></Todos>
      {/* box-3 */}
      <Todos
        className="border-2 p-2 min-h-96 min-w-80"
        status={"Complete"}
      ></Todos>
    </div>
  );
};

export default Todo;
