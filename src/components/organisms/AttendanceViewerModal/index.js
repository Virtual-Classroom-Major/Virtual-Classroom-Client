import { Box, Typography, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Formik, Form, Field } from "formik";
import { useRecoilState } from "recoil";
import hexRgb from "hex-rgb";
import { useEffect, useState } from "react";
import { authState } from "../../../atom";
import axiosInstance from "../../../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import AttendanceCard from "../../molecules/AttendanceCard";

export default function AttendanceViewerModal({
  showModal,
  setShowModal,
  classId,
}) {
  const navigate = useNavigate();

  const [attendanceData, setAttendanceData] = useState(null);

  useEffect(() => {
    console.log(classId);
    async function fetchData() {
      const { data } = await axiosInstance.get(
        `attendance/by-class-id/${classId}`
      );
      if (data.success) {
        setAttendanceData(data.data);
      }
      console.log("data", attendanceData);
    }
    fetchData();
  }, [showModal]);

  return (
    <Box>
      {showModal ? (
        <Box
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            position: "absolute",
            zIndex: 8,
            top: 0,
            left: 0,
            alignItems: "center",
            backgroundColor: "rgba(10,10,10,0.7)",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              zIndex: 9,
              top: "15vh",
              width: "30vw",
              height: "70vh",
              backgroundColor: "rgba(250,250,250,0.92)",
              borderRadius: "2vh",
              border: "4px solid rgb(230,230,230)",
              boxShadow: "0 0 15px 1px rgba(10,10,10,0.4)",
              overflow: "scroll",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                width: "100%",
                height: "7vh",
                marginBottom: "1vh",
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
                Attendance Viewer
              </Typography>

              <Button
                variant="contained"
                style={{
                  marginRight: "1vw",
                  marginLeft: "auto",
                  backgroundColor: "red",
                }}
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </Box>
            {attendanceData
              ? attendanceData.map((user) => {
                  return <AttendanceCard userData={user} />;
                })
              : null}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
