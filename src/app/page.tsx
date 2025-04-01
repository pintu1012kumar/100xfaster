import Image from "next/image";
import Dashboard from "./pages/Dashboard";
import { SignupFormDemo } from "./pages/signup";


export default function Home() {
  return (
    <div>
      <Dashboard/>
     <SignupFormDemo/>  
    </div>
  );
}
