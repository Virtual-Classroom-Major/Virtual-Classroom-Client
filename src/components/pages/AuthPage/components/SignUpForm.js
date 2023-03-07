import { Box, Button, Typography, LinearProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";

const SignUpForm = ({ onSubmitHandler, working }) => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {working ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
      ) : null}
      <Typography
        style={{
          marginTop: "10%",
          marginBottom: "10%",
          fontSize: "2.5em",
          fontWeight: "bold",
          color: "#CBB0ED",
        }}
      >
        Create Account
      </Typography>
      <Box
        style={{
          display: "flex",
          width: "65%",
          height: "10%",
          marginBottom: "5%",
          alignItem: "center",

          justifyContent: "space-between",
        }}
      >
        <img src="./google_icon.png" alt="" />
        <img src="./facebook_icon.png" alt="" />
        <img src="./twitter_icon.png" alt="" />
      </Box>
      <Formik
        initialValues={{ email: "", roll_number: "", password: "" }}
        onSubmit={onSubmitHandler}
      >
        <Form>
          <Field
            style={{
              height: "30%",
              width: "68%",
              fontSize: "20px",
              borderRadius: "10px",
              backgroundColor: "#E6DAF5",
              border: 0,
              paddingLeft: "15px",
              paddingRight: "15px",
              marginBottom: "5%",
            }}
            placeholder="Roll Number"
            name="roll_number"
            id="outlined-basic"
            label="Roll Number"
            variant="outlined"
          />
          <Field
            style={{
              width: "68%",
              height: "30%",
              borderRadius: "10px",
              fontSize: "20px",
              border: 0,
              paddingLeft: "15px",
              paddingRight: "15px",
              backgroundColor: "#E6DAF5",
              marginBottom: "5%",
            }}
            placeholder="Email"
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Field
            style={{
              width: "68%",
              height: "30%",
              borderRadius: "10px",
              fontSize: "20px",
              border: 0,
              paddingLeft: "15px",
              paddingRight: "15px",
              backgroundColor: "#E6DAF5",
              marginBottom: "5%",
            }}
            placeholder="Password"
            name="password"
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              width: "40%",
              height: "25%",
              backgroundColor: "#8D3EF0",
            }}
          >
            Sign Up
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default SignUpForm;
