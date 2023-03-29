import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ClassInfoBoard from "./components/ClassInfoBoard";
import ClassroomDoor from "./components/ClassroomDoor";
import axiosInstance from "../../../services/axiosInstance";

import { useRecoilState } from "recoil";
import { authState } from "../../../atom";
import { useNavigate } from "react-router-dom";
export default function PlaygroundV2() {
  const [user_data, set_user_data] = useRecoilState(authState);
  const [corridoorLength, setCorridoorLength] = useState(5);
  const [classData, setClassData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const { data } = await axiosInstance.get(
        `/class/by-batch/${user_data.id}`
      );
      setClassData(data.data);
      setCorridoorLength(data.data.length);
    }
    fetchData();
  }, []);
  const [doorOpen, setDoorOpen] = useState("classroom_door_open.png");

  const classJoinHandler = (classId) => {
    navigate(`/video-call/${classId}`);
  };
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

        width: `${175 * corridoorLength}vw`,
        backgroundColor: "green",
        backgroundImage: `url('corridoor_bg2.png')`,

        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        display: "flex",
      }}
    >
      {classData?.map((item, index) => (
        <>
          <ClassInfoBoard infoData={item} />

          <ClassroomDoor
            classId={item.id}
            classJoinHandler={classJoinHandler}
          />

          <img
            src={`quote_frame${
              index % 4 === 0
                ? 4
                : index % 3 === 0
                ? 3
                : index % 2 === 0
                ? 2
                : 1
            }.png`}
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
