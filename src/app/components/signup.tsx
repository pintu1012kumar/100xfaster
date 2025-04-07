"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/lib/utils";

export function SignupFormDemo() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bodyPart: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/clientdetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/home");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRedirect = () => {
    router.push('/home');
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to <span className="text-blue-400">100xfaster</span>
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Fill the form & save your time by allowing you to book doctor
        appointments from the comfort of your home.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name:</Label>
          <Input
            id="name"
            name="name"
            placeholder="Pintu Kumar"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="age">Age:</Label>
          <Input
            id="age"
            name="age"
            placeholder="25"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="gender">Gender:</Label>
          <Input
            id="gender"
            name="gender"
            placeholder="Male"
            type="text"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="bodyPart">BodyPart Name:</Label>
          <Input
            id="bodyPart"
            name="bodyPart"
            placeholder="Ear / Eye / Head / Hand / Nose.."
            type="text"
            value={formData.bodyPart}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="description">Description: (optional)</Label>
          <Input
            id="description"
            name="description"
            placeholder="Type your problem here.."
            type="text"
            value={formData.description}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className={`group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white 
          shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
          dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 
          dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]
          ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition"}`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Booking..." : "Book your appointment →"}
          <BottomGradient />
        </button>
         
        <div className=" mt-2 text-center">~ If your appointment is already booked <button className="text-blue-600 font-bold" onClick={handleRedirect}>
      click here
    </button>
     </div>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
