"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Dashboard from "../pages/Dashboard";

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
    <div>
      
      <div className="flex justify-center items-center h-screen">
        <div className="font-bold text-3xl text-blue-500 flex flex-col items-center">
          {/* Input Box */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-80 p-3 text-lg text-white placeholder-gray-300 bg-transparent border border-blue-400 rounded-xl shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />

          {/* Button */}

          <button
            className="px-6 py-3 mt-5 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={handleClick}
          >
            Check Your Time
          </button>
        </div>
      </div>
    </div>
  );
}
