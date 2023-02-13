import { Paper, Typography } from "@mui/material";

export default function ClassCard({ classData }) {
  console.log(classData.start_time);
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
          fontSize: "4vh",
          fontWeight: "bold",
        }}
      >
        {classData.title}
      </Typography>
      <Typography
        style={{
          color: "white",
          fontSize: "2vh",
          fontWeight: "bold",
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
          marginTop: "auto",
          color: "rgba(200,200,200,1)",
          fontSize: "2.5vh",
          fontWeight: "bold",
        }}
      >
        {""}
      </Typography>
    </Paper>
  );
}
