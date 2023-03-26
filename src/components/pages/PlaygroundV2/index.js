import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ClassInfoBoard from "./components/ClassInfoBoard";
import ClassroomDoor from "./components/ClassroomDoor";

export default function PlaygroundV2() {
  const [doorOpen, setDoorOpen] = useState("classroom_door_open.png");

  const classes = [
    { subject: "Chemistry", topic: "Atomic Structure", starts: "12:00 P.M." },

    { subject: "Physics", topic: "Laws of Motion", starts: "08:00 A.M." },

    { subject: "Maths", topic: "Fourier seriese", starts: "10:00 P.M." },
    { subject: "Biology", topic: "Mitosis", starts: "09:00 P.M." },
    { subject: "History", topic: "Mugal", starts: "1:00 P.M." },

  ];
  return (
    <Box
      style={{
        height: "100vh",

        width: "700vw",
        backgroundColor: "green",
        backgroundImage: `url('corridoor_bg2.png')`,

        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        display: "flex",
      }}
    >
      {classes.map((item, index) => (
        <>
          <ClassInfoBoard infoData={item} />

          <ClassroomDoor />

         
          <img
          src={`quote_frame${index % 4 === 0 ? 4 : index % 3 === 0 ? 3 : index % 2 === 0 ? 2 : 1}.png`}
          style={{
            height: "30vh",
            marginTop: "18vh",
            marginLeft: "10vw",
            marginRight: "10vw",
          }}
        />
        <img
            src={`vase${index % 2 === 0 ? 1 : 2}.png`}
            style={{
              height: "25vh",
              marginTop: "42vh",

              marginLeft: "10vw",
              marginRight: "10vw",
            }}
          />
        </>
      ))}
    </Box>
  );
}


