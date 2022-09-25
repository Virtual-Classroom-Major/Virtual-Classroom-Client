import { Box, Button, Typography, LinearProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";

const SignInForm = ({ onSubmitHandler, working }) => {
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
        Welcome Back
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
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmitHandler}
      >
        <Form>
          <Field
            style={{
              width: "68%",
              height: "40%",
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
              height: "40%",
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
              height: "35%",
              backgroundColor: "#8D3EF0",
            }}
          >
            Sign In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default SignInForm;
