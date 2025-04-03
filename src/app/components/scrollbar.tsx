"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "1️⃣ How to use this app?",
    description:
      " Using this app is very simple! After fill the form enter your name in the input box and click on Check Your Time. The system will then fetch your appointment details and display the relevant information. This way, you can easily check your booking status without having to visit the clinic.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
         How to use this app?
      </div>
    ),
  },
  {
    title: "2️⃣ Benefits of this app !!",
    description:
      "Our app is designed to save your time by allowing you to book doctor appointments from the comfort of your home. Instead of waiting in long queues at clinics or hospitals, you can simply enter your details, confirm your appointment, and arrive at the scheduled time. This reduces waiting time and ensures a smooth experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
      Benefits of this app !!
      </div>
    ),
  },
  {
    title: "3️⃣ Will I get a reminder for my appointment?",
    description:
      "Yes, we send automated confirmation messages and reminders before your scheduled appointment time. This ensures that you don’t forget about your booking. You will receive a notification via SMS or email (depending on your selected preference) so that you can plan your visit accordingly and never miss an appointment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
       Will I get a reminder for my appointment?
      </div>
    ),
  },
  {
    title: "4️⃣ Can I cancel or reschedule my appointment?",
    description:
      " Absolutely! We understand that plans can change. If you need to cancel or reschedule your appointment, simply visit the My Appointments section in the app, choose your current booking, and modify it according to your availability. You can also contact the clinic for further assistance if needed.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Can I cancel or reschedule my appointment?
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
