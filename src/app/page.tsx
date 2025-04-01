import Image from "next/image";
import Dashboard from "./pages/Dashboard";
import { cn } from "./lib/utils";
import { BackgroundBeamsWithCollisionDemo } from "./pages/home";
import { SignupFormDemo } from "./pages/signup";


export default function Home() {
  return (
    
    <div>
      <Dashboard/>
     <SignupFormDemo/>
      
    </div>
  );
}
