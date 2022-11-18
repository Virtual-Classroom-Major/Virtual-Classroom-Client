import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
export default function ProfileType() {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(90deg, rgba(203,176,237,1) 0%, rgba(203,176,237,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Box
        style={{
          width: "60%",
          height: "70%",
          borderRadius: "20px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "0px 0px 39px -19px rgba(0,0,0,0.47)",
        }}
      >
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", color: "#505050" }}
        >
          Select Profile Type
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "#505050", marginTop: "3%", color: "#606060" }}
        >
          To fill your profile details please choose profile type
        </Typography>

        <Box
          style={{
            width: "90%",
            height: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ width: "50%", height: "85%" }}>
            <img src="./students.jpg " alt="" style={{ height: "35vh" }} />
          </Box>
          <Box
            style={{
              width: "50%",
              height: "85%",
              borderLeft: "dashed 2px #aaaaaa",
            }}
          >
            <img src="./teachers.jpg " alt="" style={{ height: "35vh" }} />
          </Box>
        </Box>

        <Box
          style={{
            marginTop: "20px",
            width: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              fontSize: "18px",
              backgroundColor: "#8D3EF0",
              width: "35%",
              height: "5vh",
              color: "white",
              borderRadius: "10px",
            }}
          >
            I'm a Student
          </Button>
          <Button
            variant="outlined"
            style={{
              border: "2px solid #8D3EF0",
              color: "#8D3EF0",
              fontSize: "18px",
              backgroundColor: "#f9f9f9",
              width: "35%",
              borderRadius: "10px",
              height: "5vh",
            }}
          >
            I'm an Educator
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
