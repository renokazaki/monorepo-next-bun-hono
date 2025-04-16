"use client";
import { useState } from "react";
import { client } from "@/src/utils/client";

export default function Home() {
  const [data2, setData2] = useState<{ message: string } | null>(null);
  const handleClick = async () => {
    const res = await client.hello.$get();
    const data = await res.json();
    alert(data.message);
  };
  const handleClick2 = async () => {
    const res = await client.hello2.$get();
    const data2 = await res.json();
    setData2(data2);
  };
  return (
    <div>
      <button onClick={handleClick} className="bg-amber-200">
        Click me!!!!
      </button>
      <button onClick={handleClick2} className="bg-amber-200">
        Click me2!!!!
      </button>
      {data2 && <p>{data2.message}</p>}
    </div>
  );
}
