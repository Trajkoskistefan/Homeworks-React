import { useState } from "react";
import "./App.css";
import MyHeaderComponent from "./components/headerComponent";
import MyMenuComponent from "./components/menuComponents";
import MyFooterComponent from "./components/footerComponent";
import { Button } from "./components/button/simpleButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="content-wrapper">
      <MyHeaderComponent />
      <MyMenuComponent/>
      <MyFooterComponent/>
      
    </div>
    
  );
}

export default App;
