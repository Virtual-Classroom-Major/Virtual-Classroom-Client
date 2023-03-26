import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import randomcolor from "randomcolor";
export default function AttendanceCard({ userData }) {
  const color = randomcolor();
  console.log("userData", userData);
  return (
    <Box
      style={{
        width: "98%",
        height: "10vh",
        borderRadius: "0.5vh",
        backgroundColor: "white",
        boxShadow: "0 10px 10px 10px rgba(100,100,100,0.5)",
        marginTop: "1vh",
        marginBottom: "1vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          width: "7vh",
          height: "7vh",
          borderRadius: "7vh",
          backgroundColor: color,
          color: "rgba(200,200,200,0.8)",
          alignItems: "center",
          marginLeft: "1vw",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            fontSize: "5vh",
            verticalAlign: "middle",
            lineHeight: "8vh",
          }}
        >
          {userData.user.first_name.slice(0, 1).toUpperCase()}
        </Typography>
      </Box>
      <Typography
        style={{
          fontSize: "2.5vh",
          fontWeight: "bold",
          color: "rgb(100,100,100)",
          marginLeft: "2vw",
        }}
      >
        {userData.user.first_name}
      </Typography>
      <Typography
        style={{
          fontSize: "2vh",
          marginLeft: "auto",
          marginRight: "2vw",
          color: "rgb(150,150,150)",
        }}
      >
        {userData.user.roll_number}
      </Typography>
    </Box>
  );
}
