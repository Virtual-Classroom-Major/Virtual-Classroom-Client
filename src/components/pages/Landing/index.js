import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [doorOpen, setDoorOpen] = useState("classroom_door_open.png");
  const classes = [
    { subject: "Chemistry", topic: "Atomic Structure", starts: "12:00 P.M." },

    { subject: "Physics", topic: "Laws of Motion", starts: "08:00 A.M." },
    { subject: "Maths", topic: "Fourier seriese", starts: "08:00 P.M." },
  ];

  const onAuthButtonClick = () => {
    navigate("/auth");
  };
  return (
    <Box style={{ width: "100vw", height: "300vh" }}>
      <Box
        id="Page-1"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#CDAAEF",
        }}
      >
        <Box
          style={{
            width: "80vw",
            marginBottom: "20vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Button
            style={{
              backgroundColor: "#623FAC",
              color: "white",
              width: "12vw",
              fontSize: "1vw",
              fontWeight: "bold",
              marginLeft: "auto",
            }}
            onClick={onAuthButtonClick}
          >
            LOGIN / SIGNUP
          </Button>
        </Box>
        <Box
          style={{
            width: "80vw",
            height: "40vh",
            // backgroundColor: "green",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: "3vw",
              color: "#623FAC",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            A SINGLE <span style={{ color: "white" }}>APPLICATION</span> FOR ALL
            <span style={{ color: "white" }}> EDUCATIONAL</span> NEEDS
          </Typography>
          <img style={{ width: "65vw" }} src={"landingp1i1.png"} />
        </Box>
        <Box
          style={{
            width: "80vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "10vh",
          }}
        >
          <Button
            style={{
              backgroundColor: "#9D66D4",
              color: "white",
              marginTop: "3vh",
              width: "10vw",
              fontSize: "1vw",
              fontWeight: "bold",
              marginRight: "auto",
            }}
          >
            EXPLORE
          </Button>
        </Box>
      </Box>
      <Box
        id="Page-1"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#623FAC",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            fontSize: "3vw",
            fontWeight: "bold",
            color: "#CDAAEF",
            marginTop: "3vh",
            marginBottom: "auto",
          }}
        >
          FEATURES
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img style={{ width: "30vw" }} src={"Group 1.png"} />
            </Grid>
            <Grid item xs={4}>
              <img style={{ width: "30vw" }} src={"Group 2.png"} />
            </Grid>
            <Grid item xs={4}>
              <img style={{ width: "30vw" }} src={"Group 3.png"} />
            </Grid>
            <Grid item xs={4}>
              <img style={{ width: "30vw" }} src={"Group 4.png"} />
            </Grid>
            <Grid item xs={4}>
              <img style={{ width: "30vw" }} src={"Group 5.png"} />
            </Grid>
            <Grid item xs={4}>
              <img style={{ width: "30vw" }} src={"Group 6.png"} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        id="Page-1"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#CDAAEF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            fontSize: "3vw",
            fontWeight: "bold",
            color: "#623FAC",
            marginTop: "3vh",
            marginBottom: "auto",
          }}
        >
          TECH STACK
        </Typography>
        <Box style={{ marginBottom: "auto" }}>
          <Grid container spacing={7}>
            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo1.png"}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo2.png"}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo3.png"}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo4.png"}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo5.png"}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo6.png"}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo7.png"}
              />
            </Grid>
            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo8.png"}
              />
            </Grid>

            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo9.png"}
              />
            </Grid>

            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo10.png"}
              />
            </Grid>

            <Grid item xs={3}>
              <img
                style={{ width: "10vw", boxShadow: "0 0 100px 1px #ffffff" }}
                src={"techLogo11.png"}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
