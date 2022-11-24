import { Box } from "@mui/material";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import axiosInstance from "../../../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import AuthToggle from "./components/AuthToggle";
import { useState } from "react";

const AuthPage = () => {
  const [authToggleState, setAuthToggleState] = useState(false);

  const [working, setWorking] = useState(false);
  const navigate = useNavigate();
  const signUpHandler = async (values) => {
    setWorking(true);
    await axiosInstance.post("/users/signup", values);
    navigate("/dashboard");
  };

  const signInHandler = async (values) => {
    setWorking(true);
    const { data } = await axiosInstance.post("/users/signin", values);
    if (data) navigate("/dashboard");
  };

  const authToggleHandler = () => {
    setAuthToggleState(!authToggleState);
  };

  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#CBB0ED",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        style={{ width: "100vw", height: "5vh", backgroundColor: "#A98AD0" }}
      ></Box>
      <Box
        style={{
          width: "100vw",
          height: "95vh",
          backgroundColor: "red",
          display: "flex",
        }}
      >
        <Box
          style={{
            width: "50vw",
            height: "95vh",
            minHeight: "800px",
            minwidth: "600px",
            backgroundColor: "#CBB0ED",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            style={{
              width: "50%",
              minWidth: "300px",
              minHeight: "450px",
              height: "60%",
              backgroundColor: "white",
            }}
          >
            {authToggleState ? (
              <SignUpForm working={working} onSubmitHandler={signUpHandler} />
            ) : (
              <SignInForm working={working} onSubmitHandler={signInHandler} />
            )}
          </Box>
        </Box>
        <Box
          style={{
            width: "50vw",
            height: "95vh",
            minwidth: "600px",
            backgroundColor: "white",
            minHeight: "800px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            style={{
              width: "50%",
              height: "60%",
              backgroundColor: "#CBB0ED",
              minWidth: "300px",
              minHeight: "450px",
            }}
          >
            <AuthToggle
              authToggleState={authToggleState}
              authToggleHandler={authToggleHandler}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
