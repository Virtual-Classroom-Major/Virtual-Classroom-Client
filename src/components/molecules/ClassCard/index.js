import { Paper, Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../services/axiosInstance";
export default function ClassCard({ classData, attendanceHandler }) {
  console.log(classData.start_time);
  const [attended, setAttended] = useState(false);

  const navigate = useNavigate();

  const handleAttendance = () => {
    setAttended(true);
  };
  const joinClass = () => {
    navigate(`/video-class/${classData.id}`);
  };
  const deleteClass = async () => {
    await axiosInstance.delete(`/class/${classData.id}`);
    navigate(0);
  };
  const viweAttendance = async () => {
    attendanceHandler(classData.id);
  };
  return (
    <Paper
      elevation={6}
      style={{
        padding: "2vh",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        width: "20vw",
        height: "30vh",
        backgroundColor: "rgb(200,200,230)",
        borderRadius: "3vh",
        background: `rgb(${classData.color[0]},${classData.color[1]},${classData.color[2]})`,
        background: `linear-gradient(-60deg, rgba(${classData.color[0]},${
          classData.color[1]
        },${classData.color[2]},1) 0%, rgba(${classData.color[0] - 41},${
          classData.color[1] - 110
        },${classData.color[2] - 77},1) 100%)`,
      }}
    >
      <Typography
        style={{
          color: "rgba(250,250,250,0.4)",
          fontSize: "3.6vh",
          fontWeight: "bold",
        }}
      >
        {classData.title.slice(0, 23)}...
      </Typography>
      <Typography
        style={{
          color: "white",
          fontSize: "2vh",
          fontWeight: "bold",
          marginTop: "auto",
        }}
      >
        {classData.target_batch} | SEC {classData.target_section}
      </Typography>
      <Typography
        style={{
          color: "white",
          fontSize: "2vh",
          fontWeight: "bold",
        }}
      >
        {classData.duration} minutes
      </Typography>
      <Typography
        style={{
          color: "rgba(200,200,200,1)",
          fontSize: "2.5vh",
          fontWeight: "bold",
        }}
      >
        {classData.subject.name}
      </Typography>
      {/* {!attended && (
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "2vh" }}
          onClick={handleAttendance}
        >
          Mark Attendance
        </Button>
      )}
      {attended && (
        <Typography
          style={{
            color: "green",
            fontSize: "2.5vh",
            fontWeight: "bold",
            marginTop: "2vh",
          }}
        >
          Attended
        </Typography>
      )} */}
      <Box
        style={{
          width: "18vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{
            width: "2vw",
            backgroundColor: `rgba(255,255,255,0.9)`,
            fontWeight: "bold",
            color: "green",
          }}
          onClick={joinClass}
        >
          Join
        </Button>
        <Button
          style={{
            width: "6vw",
            backgroundColor: `rgba(255,255,255,0.9)`,
            fontWeight: "bold",
            color: "orange",
          }}
          onClick={viweAttendance}
        >
          Attendance
        </Button>
        <Button
          style={{
            width: "6vw",
            backgroundColor: `rgba(255,255,255,0.9)`,
            fontWeight: "bold",
            color: "red",
          }}
          onClick={deleteClass}
        >
          Delete
        </Button>
      </Box>
    </Paper>
  );
}
