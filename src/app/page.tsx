import Image from "next/image";
import Dashboard from "./pages/Dashboard";
import { SignupFormDemo } from "./components/signup";
import { StickyScrollRevealDemo } from "./components/scrollbar";


export default function Home() {
  return (
    <div>
      <Dashboard/>
      <div>
      <SignupFormDemo/>  
      <StickyScrollRevealDemo/>
      </div>
     
    </div>
  );
}
