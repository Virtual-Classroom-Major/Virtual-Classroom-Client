import { useState } from "react";
import { Link } from "react-router-dom"; // import Link component from React Router
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
export default function ClassroomDoor() {
  const [doorOpen, setDoorOpen] = useState("classroom_door.png");

  return (
    <div style={{ position: "relative" }}>
      <img
        src={doorOpen}
        style={{
          height: "70vh",
          marginTop: "18vh",
          marginLeft: "2vw",
        }}
        onClick={() =>
          setDoorOpen(
            doorOpen === "classroom_door_open.png"
              ? "classroom_door.png"
              : "classroom_door_open.png"
          )
        }
      />
      {doorOpen === "classroom_door_open.png" && (
        <Link to="/classroom">
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "73%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <MeetingRoomIcon style={{color:"orange",fontSize:"4.5vw"}}/>
            Join Class
          </button>
        </Link>
      )}
    </div>
  );
}
