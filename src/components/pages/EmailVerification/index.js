import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import Lottie from "lottie-react";
import emailLoader from "./email_loading.json";

export default function EmailNotVerified() {
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
          style={{ fontWeight: "bold", color: "#707070" }}
        >
          Please wait while we verify Your Email
        </Typography>

        <Lottie animationData={emailLoader} loop={true} />

        <Typography
          style={{ width: "60%", color: "#606060", fontSize: "18px" }}
        >
          It might take a while , In case of any issue please contact for
          support
        </Typography>
        <Button
          variant="outlined"
          style={{
            border: "2px solid #8D3EF0",
            color: "#8D3EF0",
            marginTop: "2vh",
            fontSize: "18px",
            backgroundColor: "#f9f9f9",
            width: "40%",
            borderRadius: "10px",
            height: "5vh",
          }}
        >
          Contact Support
        </Button>
      </Box>
    </Box>
  );
}
