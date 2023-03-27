import { Box, Typography, Button } from "@mui/material";
export default function AttendanceStatusCard({
  attendanceData,
  handleAttendanceClose,
}) {
  console.log(attendanceData);

  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Box
        style={{
          borderRadius: "2vh",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "30%",
          paddingTop: "2vh",
          backgroundColor: "rgb(26, 107, 84)",
        }}
      >
        <Typography
          style={{
            fontSize: "5vh",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {attendanceData.name.toUpperCase()}
        </Typography>
        <Typography
          style={{
            textAlign: "left",
            fontSize: "2vh",
            fontWeight: "bold",
            color: "rgb(189, 252, 194)",
            paddingLeft: "1vw",
          }}
        >
          TOTAL CLASSES : {attendanceData.total_number_of_classes}
        </Typography>
        <Typography
          style={{
            textAlign: "left",
            fontSize: "2vh",
            fontWeight: "bold",
            color: "rgb(194, 219, 255)",
            paddingLeft: "1vw",
          }}
        >
          CLASSES ATTENDED : {attendanceData.attended}
        </Typography>
        <Typography
          style={{
            textAlign: "left",
            fontSize: "3vh",
            fontWeight: "bold",
            color: "rgb(194, 219, 255)",
            paddingLeft: "1vw",
            paddingTop: "4vh",
          }}
        >
          PRESENT PERCENTAGE : {attendanceData.present_percent}%
        </Typography>
        <Box
          style={{
            marginTop: "auto",
            width: "100%",
            height: "5%",
            backgroundColor: "rgb(36, 179, 212)",
          }}
        >
          <Box
            style={{
              width: `${attendanceData.present_percent}%`,
              height: "100%",
              backgroundColor:
                attendanceData.present_percent >= 75
                  ? "rgb(55, 245, 22)"
                  : "rgb(230, 32, 32)",
            }}
          ></Box>
        </Box>
      </Box>
      <Box style={{ width: "100%", height: "65%", overflow: "scroll" }}>
        {attendanceData.total_classes.map((classData) => (
          <Box
            style={{
              marginBottom: "2vh",
              marginTop: "2vh",
              borderRadius: "1vh",
              width: "100%",
              height: "30%",
              display: "flex",
              flexDirection: "column",
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
                color: "white",
                fontSize: "3vh",
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "1vw",
                paddingTop: "1vw",
              }}
            >
              {classData.title}
            </Typography>
            <Typography
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "2.5vh",
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "1vw",
                paddingTop: "1vw",
              }}
            >
              Duration : {classData.duration} mins
            </Typography>
            <Typography
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: "2.5vh",
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: "1vw",
              }}
            >
              Start time : {classData.start_time}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box style={{ height: "10%", marginTop: "2vh" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "red" }}
          onClick={() => handleAttendanceClose(false)}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
}
