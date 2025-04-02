"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState(""); // Name store karne ke liye state

  const handleClick = () => {
    if (name.trim() !== "") {
      router.push(`/statusbar?name=${encodeURIComponent(name)}`);
    } else {
      alert("Please enter your name before proceeding.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="font-bold text-3xl text-blue-500 flex flex-col items-center">
        {/* Input Box */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded text-black mb-4"
        />
        
        {/* Button */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClick}>
          Click me
        </button>
      </div>
    </div>
  );
}
