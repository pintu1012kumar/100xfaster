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

    <div>
     
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4">
    {/* Success Message */}
    <div className="w-full max-w-md p-5 mb-6 text-center bg-gray-800 border border-green-500 text-green-400 rounded-lg shadow-md">
      <p className="text-2xl font-bold">Congratulations !!</p>
      <p className="mt-2 text-lg font-medium">
        Your appointment has been successfully booked. We look forward to seeing you at your scheduled time.
      </p>
    </div>
  
    {/* Input & Button */}
    <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center space-y-5">
      {/* Input Box */}
      <input
        type="text"
        placeholder="Enter your name.."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-4 text-lg text-white placeholder-gray-400 bg-gray-700 border border-blue-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
      />
  
      {/* Button */}
      <button
        className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        onClick={handleClick}
      >
        Check Your Scheduled Time
      </button>
    </div>
  </div>
    </div>
  
  
  
  );
}
