import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";

const LoginForm = () => {
  const onSubmitHandler = (values) => {
    console.log(values);
  };
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
      <Typography
        style={{
          marginTop: "10%",
          marginBottom: "10%",

          fontSize: "4vh",
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
        <img src="./google_icon.png" />
        <img src="./facebook_icon.png" />
        <img src="./twitter_icon.png" />
      </Box>
      <Formik
        initialValues={{ email: "", roll_number: "", password: "" }}
        onSubmit={onSubmitHandler}
      >
        <Form>
          <Field
            style={{
              height: "30%",
              width: "70%",
              fontSize: "20px",
              borderRadius: "10px",
              backgroundColor: "#CBB0ED",
              marginBottom: "5%",
            }}
            name="roll_number"
            id="outlined-basic"
            label="Roll Number"
            variant="outlined"
          />
          <Field
            style={{
              width: "70%",
              height: "30%",
              borderRadius: "10px",
              backgroundColor: "#CBB0ED",
              marginBottom: "5%",
            }}
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Field
            style={{
              width: "70%",
              height: "30%",
              borderRadius: "10px",
              backgroundColor: "#CBB0ED",
              marginBottom: "5%",
            }}
            name="password"
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            style={{ width: "40%", height: "20%" }}
          >
            Sign Up
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
