import { Box } from "@mui/material";
import LoginForm from "./components/LoginForm";

const AuthPage = () => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        style={{ width: "100vw", height: "5vh", backgroundColor: "pink" }}
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
            backgroundColor: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            style={{ width: "50%", height: "60%", backgroundColor: "green" }}
          >
            <LoginForm />
          </Box>
        </Box>
        <Box
          style={{
            width: "50vw",
            height: "95vh",
            backgroundColor: "orange",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            style={{ width: "50%", height: "60%", backgroundColor: "purple" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
