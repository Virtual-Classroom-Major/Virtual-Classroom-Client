import { useState } from "react";
export default function ClassroomDoor() {
  const [doorOpen, setDoorOpen] = useState("classroom_door.png");

  return (
    <img
      src={doorOpen}
      style={{
        height: "70vh",
        marginTop: "15vh",
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
  );
}
