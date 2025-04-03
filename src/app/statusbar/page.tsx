"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Statusbar() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  
  const [bodyPart, setBodyPart] = useState<string | null>(null);
  const [doctorName, setDoctorName] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (name) {
      fetch(`/api/getclient?name=${encodeURIComponent(name)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setBodyPart(null);
            setDoctorName(null);
          } else {
            setBodyPart(data.bodyPart);
            setDoctorName(data.doctorName); // Assuming API returns doctorName
          }
        })
        .catch(() => setError("Failed to fetch user data"))
        .finally(() => setLoading(false));
    }
  }, [name]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center p-6 relative">
      {/* 🚀 Buttons on Top-Right */}
      <div className="absolute top-6 right-6 flex gap-4">
        <button className="flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          💬 Need Help?
        </button>
        <button className="flex items-center gap-2 bg-green-600 px-5 py-3 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105">
          📹 Talk to Doctor
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400 text-4xl">Fetching details...</p>
      ) : error ? (
        <p className="text-red-500 text-4xl">{error}</p>
      ) : (
        <div className="text-[clamp(1.5rem, 4vw, 3rem)] font-semibold leading-[1.6] w-full max-w-3xl">
          <p>
            Hey <span className="text-blue-400">{name}</span> 👋
          </p>
          <p className="mt-6">
            We noticed an issue with your{" "}
            <span className="text-yellow-400">{bodyPart}</span>.
          </p>
          <p>
            Our expert team is working to ensure you get the best care.
          </p>
          <p>
            Your doctor,{" "}
            <span className="text-green-400">{doctorName}</span>, is ready to
            see you at <span className="text-blue-400">11 AM - 1 PM</span>.
          </p>
          <p className="mt-10 text-blue-500 text-[clamp(1.2rem, 3vw, 2rem)]">
            ℹ️ Your appointment is confirmed!
            <br /> Please visit the hospital on time.
          </p>
        </div>
      )}
    </div>
  );
}
