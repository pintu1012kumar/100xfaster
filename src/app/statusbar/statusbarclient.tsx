"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function StatusbarClient() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [bodyPart, setBodyPart] = useState<string | null>(null);
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
          } else {
            setBodyPart(data.bodyPart);
          }
        })
        .catch(() => setError("Failed to fetch user data"))
        .finally(() => setLoading(false));
    }
  }, [name]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 relative overflow-hidden">
      <div className="absolute top-6 right-6 flex gap-4">
        <button className="flex items-center gap-2 bg-blue-500 px-5 py-3 rounded-xl text-white text-base font-medium shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300">
          Urgent chat
        </button>
        <button className="flex items-center gap-2 bg-emerald-500 px-5 py-3 rounded-xl text-white text-base font-medium shadow-lg hover:bg-emerald-600 hover:scale-105 transition-all duration-300">
         Urgent call
        </button>
      </div>

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 text-center mt-20 border border-white/20">
        {loading ? (
          <p className="text-gray-300 text-3xl font-medium">Fetching details...</p>
        ) : error ? (
          <p className="text-red-400 text-3xl font-semibold">{error}</p>
        ) : (
          <div className="text-[clamp(1.4rem,4vw,2.5rem)] font-semibold leading-snug space-y-6">
            <p>
              Hey <span className="">{name}  !!</span> 
            </p>
            <p>
              We noticed an issue with your{" "}
              <span className="text-yellow-400">{bodyPart}</span>.
            </p>
            <p>Our expert team is working to ensure you get the best care.</p>
            <p>
              Your doctor is ready to see you between{" "}
              <span className="text-blue-300">11 AM - 1 PM</span>.
            </p>
            <p className="text-red-500 text-[clamp(1.1rem,3vw,1.8rem)] mt-6">
              ℹ️ Your appointment is confirmed!<br />
              Please visit the hospital on time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
