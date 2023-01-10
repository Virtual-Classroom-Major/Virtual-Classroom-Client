import { Box, Typography, Button } from "@mui/material";
import { Formik, Field } from "formik";
export default function NewClassModal() {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: "15vh",
          width: "30vw",
          height: "70vh",
          backgroundColor: "rgba(250,250,250,0.98)",
          borderRadius: "2vh",
          border: "4px solid rgb(230,230,230)",
          boxShadow: "0 0 15px 1px rgba(10,10,10,0.4)",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "7vh",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderBottom: "1px solid lightgray",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              color: "rgb(80,80,80)",
              marginLeft: "1vw",
            }}
          >
            New Class
          </Typography>
          <Button
            variant="contained"
            style={{
              marginLeft: "auto",
              marginRight: "1vw",
              backgroundColor: "rgb(143, 52, 235)",
            }}
          >
            Create
          </Button>
          <Button
            variant="contained"
            style={{
              marginRight: "1vw",
              backgroundColor: "red",
            }}
          >
            Close
          </Button>
        </Box>
        <Formik>
          <Field></Field>
        </Formik>
      </Box>
    </Box>
  );
}
