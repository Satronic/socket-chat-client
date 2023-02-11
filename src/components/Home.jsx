import React from "react";
import { Link } from "react-router-dom";

// import "./Home.css";

export const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Sala"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        INGRESAR
      </Link>
    </div>
  );
};