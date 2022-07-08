import {useState} from "react";
import { Pop } from "./component/Pop";
import "./App.css"
import {Nav} from "./component/Nav"

function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 

  return (
   <div> <div >{isOpen ? null: <Nav></Nav> }</div>
    <div className="container" >
      <div>
      
       <button  onClick={()=>togglePopup()}>save segment</button>
       </div>
       <div>{isOpen ? <Pop></Pop> : null }</div>
    </div></div>
  );
}

export default App;
