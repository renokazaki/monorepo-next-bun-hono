"use client";
import { useState } from "react";
import { client } from "@/src/utils/client";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function Home() {
  const [data2, setData2] = useState<Todo[]>([]);
  const handleClick = async () => {
    const res = await client.hello.$get();
    const data = await res.json();
    alert(data.message);
  };
  const handleClick2 = async () => {
    const res = await client.hello2.$get();
    const data2 = (await res.json()) as { todos: Todo[] };
    setData2(data2.todos);
  };
  return (
    <div>
      <button onClick={handleClick} className="bg-amber-200">
        Click me!!!!
      </button>
      <button onClick={handleClick2} className="bg-amber-200">
        Click me2!!!!
      </button>
      {data2 &&
        data2.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
    </div>
  );
}
