import { Box, Typography } from "@mui/material";
export default function ClassInfoBoard({ infoData }) {
  return (
    <Box
      style={{
        backgroundImage: `url('classroom_info_board.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "25vw",
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15vh",
      }}
    >
      <Typography
        style={{
          color: "white",
          fontSize: "3vh",
          fontFamily: `'Fredericka the Great', cursive`,
        }}
      >
        {infoData.subject}
      </Typography>
      <Typography
        style={{
          color: "white",
          fontSize: "2.5vh",
          fontFamily: `'Fredericka the Great', cursive`,
        }}
      >
        Topic : {infoData.topic}
      </Typography>
      <Typography
        style={{
          color: "white",
          fontSize: "2.5vh",
          fontFamily: `'Fredericka the Great', cursive`,
        }}
      >
        Starts At : {infoData.starts}
      </Typography>
    </Box>
  );
}
