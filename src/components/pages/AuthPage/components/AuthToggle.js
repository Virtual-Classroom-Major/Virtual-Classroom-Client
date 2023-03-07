import { Box, Button, Typography } from "@mui/material";

const AuthToggle = ({ authToggleHandler, authToggleState }) => {
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
          fontSize: "2.5em",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {authToggleState
          ? "Already Have An Account ?"
          : "Don't Have An Account Yet?"}
      </Typography>
      <img width="200px" src="random_logo.png" alt="" />
      <Button
        onClick={authToggleHandler}
        variant="contained"
        style={{
          marginTop: "11%",
          width: "40%",
          height: "9%",
          backgroundColor: "#742682",
        }}
      >
        {authToggleState ? "Sign In" : "Sign Up"}
      </Button>
    </Box>
  );
};

export default AuthToggle;
