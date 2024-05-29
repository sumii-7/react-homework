import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [input, setInput] = useState("");

  const [list, setList] = useState([
    {
      id: uuidv4(),
      text: "공부하기",
      isDone: true,
    },
    {
      id: uuidv4(),
      text: "놀기",
      isDone: false,
    },
  ]);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!input) return;

    const newTodolist = {
      id: uuidv4(),
      text: input,
      isDone: false,
    };
    setList([...list, newTodolist]);
    setInput("");
  };

  const ToggleTodo = (id) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deletelist = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>todolist</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          value={input}
          onChange={inputChange}
        />
        <button>추가</button>
      </form>
      <ul>
        {list.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          >
            {todo.text}
            <button onClick={() => ToggleTodo(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => deletelist(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
