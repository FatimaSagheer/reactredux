import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Services/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    // Dispatch your removeTodo action with the todo id
    dispatch(removeTodo(id));
  };

  return (
    <div className="bg-rose-500 ml-40 mr-40 pb-10 pt-10">
      <h1 className="text-white text-2xl mb-6">Todos</h1>
      <table className="ml-40 p-5 bg-sky-500/50 text-white">
        <thead>
          <tr className="bg-sky-500/50 border-2 text-white">
            <th className="pl-14 pr-14  py-4">Todo</th>
            <th className="px-8 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="bg-sky-500/50 border-2 text-white">
              <td className="pl-14 pr-14  py-4  text-bold">{todo.text}</td>
              <td>
                <button onClick={() => handleRemoveTodo(todo.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                  </svg>
                </button>
                <button>
                  <svg
                    width="24"
                    stroke-width="1.5"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      d="M8 10H16M8 6H12M8 14H11"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
