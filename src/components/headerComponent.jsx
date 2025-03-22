import { Button } from "./button/simpleButton";
import "./header.css";

function MyHeaderComponent() {
  return (
    <div className="header-container fixed-header">
      <h1 className="header-title">Welcome to My Music World</h1>
      <p className="header-subtitle">Explore the rhythm of life through sound</p>
      <Button/>
    </div>
  );
}

export default MyHeaderComponent;
