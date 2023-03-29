import { Box, Typography } from "@mui/material";
import moment from "moment";
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
        <i>{infoData.subject.name}</i>
      </Typography>
      <Typography
        style={{
          color: "white",
          fontSize: "2.5vh",
          marginTop: "2vh",
          fontFamily: `'Fredericka the Great', cursive`,
        }}
      >
        Topic : {infoData.title.slice(0, 20) + ".."}
      </Typography>
      <Typography
        style={{
          color: "white",
          fontSize: "2.5vh",
          fontFamily: `'Fredericka the Great', cursive`,
        }}
      >
        Date : {moment(infoData.start_time).format("L")}
      </Typography>
      <Typography
        style={{
          color: "white",
          fontSize: "2.5vh",
          fontFamily: `'Fredericka the Great', cursive`,
        }}
      >
        Starts At : {moment(infoData.start_time).format("h : mm A")}
      </Typography>
    </Box>
  );
}
