import { Typography, Box, Button } from "@mui/material";

export default function SubjectCard({ subjectData, showAttendanceHandler }) {
  return (
    <Box
      style={{
        width: "20vw",
        height: "50vh",
        backgroundColor: "white",
        borderRadius: "1vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 10px 10px rgba(100,100,100,0.5)",
      }}
    >
      <Box
        style={{
          borderTopLeftRadius: "1vh",
          borderTopRightRadius: "1vh",
          backgroundColor: "green",
          width: "100%",
          height: "60%",
          overflow: "hidden",
        }}
      >
        <img src={`https://api.lorem.space/image/book?w=600&h=300`} />
      </Box>
      <Typography
        style={{
          textAlign: "left",
          color: "rgba(100,100,100,0.9)",
          fontSize: "3vh",
          marginLeft: "1vw",
        }}
      >
        {subjectData.name}
      </Typography>
      <Typography
        style={{
          textAlign: "left",
          color: "rgba(100,100,100,0.6)",
          fontSize: "2vh",
          fontWeight: "bold",
          marginLeft: "1vw",
        }}
      >
        {subjectData.subject_code}
      </Typography>
      <Typography
        style={{
          textAlign: "left",
          color: "rgba(100,100,100,0.9)",
          fontSize: "2vh",
          marginLeft: "1vw",
        }}
      >
        {subjectData.description.slice(0, 130) + "..."}
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: "mint" }}
        onClick={() => showAttendanceHandler(subjectData.id, subjectData)}
      >
        View Attendance
      </Button>
    </Box>
  );
}
