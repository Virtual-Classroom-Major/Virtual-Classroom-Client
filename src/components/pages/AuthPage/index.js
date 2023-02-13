import { Box } from "@mui/material";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import axiosInstance from "../../../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import AuthToggle from "./components/AuthToggle";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { alertState, authState } from "../../../atom";
import { STUDENT, FACULTY } from "../../../constants/UserTypes";

const AuthPage = () => {
  const [authToggleState, setAuthToggleState] = useState(false);

  const [alert_State, setAlert_State] = useRecoilState(alertState);
  const [auth_State, setAuth_State] = useRecoilState(authState);

  const [working, setWorking] = useState(false);
  const navigate = useNavigate();

  console.log("alert_State", alert_State);
  const signUpHandler = async (values) => {
    setWorking(true);
    await axiosInstance.post("/users/signup", values);
    navigate("/email_not_verified");
    setWorking(false);
  };

  const signInHandler = async (values) => {
    setWorking(true);
    const { data } = await axiosInstance.post("/users/signin", values);
    console.log(data);
    if (data.success) {
      localStorage.setItem("user_id", data.data.id);
      localStorage.setItem("user_type", data.data.user_type);
      setAuth_State(data.data);
      if (!data.data.user_type) navigate("/profile_type");
      else {
        if (data.data.user_type === STUDENT)
          navigate("/dashboard/profile_details_student");
        else if (data.data.user_type === FACULTY)
          navigate("/dashboard/profile_details_faculty");
      }
    } else {
      setAlert_State({
        type: "Error",
        message: "Invalid Credentials",
      });

      setTimeout(() => {
        setAlert_State(
          {
            type: null,
            message: null,
          },
          6000
        );
      });
    }
    setWorking(false);
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
