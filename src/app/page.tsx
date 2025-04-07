
import Dashboard from "./pages/Dashboard";
import { SignupFormDemo } from "./components/signup";
import { StickyScrollRevealDemo } from "./components/scrollbar";


export default function Home() {
  return (
    <div>
      
      <div>
      <Dashboard/>
      <SignupFormDemo/>  
      </div>
      <StickyScrollRevealDemo/>
      
     
     
     
    </div>
  );
}
