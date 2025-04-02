"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Statusbar() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name"); // Extract name from URL
  const [age, setAge] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (name) {
      fetch(`/api/getclient?name=${encodeURIComponent(name)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setAge(null);
          } else {
            setAge(data.age);
          }
        })
        .catch(() => setError("Failed to fetch user data"));
    }
  }, [name]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl font-bold text-blue-500">
      <p>Hey {name ? name : "Guest"},</p>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>{age !== null ? `Your age is: ${age}` : "Loading..."}</p>
      )}
    </div>
  );
}
