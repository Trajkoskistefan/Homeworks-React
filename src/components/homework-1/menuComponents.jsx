import { Button } from "./button/simpleButton";
import "./menu.css"
function MyMenuComponent() {
    return (
        <div className="menu-container">
        <h3 className="menu-title">🎵 Music Vibes 🎶</h3>
        <p className="menu-subtitle">Discover the most popular music genres:</p>
        <ul className="genre-list">
          <li>🎸 Rock <Button/></li>
          <li>🤘 Metal <Button/></li>
          <li>🎤 Hip-Hop <Button/></li>
          <li>🎻 Classical <Button/></li>
          <li>🎧 Electronic <Button/></li>
          <li>🎷 Jazz <Button/></li>
        </ul>
      </div>
    );
  }

  
  export default MyMenuComponent;
  