import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
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
          style={{ fontWeight: "bold", color: "#505050" }}
        >
          Verify Your Email
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "#505050", marginTop: "3%", color: "#606060" }}
        >
          Please verify your email to fill up your profile details and enjoy our
          services
        </Typography>

        <img src="./EmailNotVerified_bg.jpg " alt="" style={{ width: "55%" }} />
        <Typography
          style={{ width: "60%", color: "#606060", fontSize: "18px" }}
        >
          An email has been sent to your given with a verification link. If you
          have not received any mail please check your spam or click on resend
        </Typography>
        <Box
          style={{
            marginTop: "20px",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              fontSize: "18px",
              backgroundColor: "#8D3EF0",
              width: "40%",
              height: "5vh",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Resend Email
          </Button>
          <Button
            variant="outlined"
            style={{
              border: "2px solid #8D3EF0",
              color: "#8D3EF0",
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
    </Box>
  );
}
