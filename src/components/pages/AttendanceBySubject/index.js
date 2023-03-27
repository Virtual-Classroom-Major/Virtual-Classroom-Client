import { Box, Button, Grid, Typography } from "@mui/material";
import ClassCard from "../../molecules/ClassCard";
import { useState } from "react";
import NewClassModal from "../../organisms/NewClassModal";
import { useEffect } from "react";
import axiosInstance from "../../../services/axiosInstance";
import { useRecoilState } from "recoil";
import { authState } from "../../../atom";
import AttendanceViewerModal from "../../organisms/AttendanceViewerModal";
import SubjectCard from "../../molecules/SubjectCard";
import AttendanceStatusCard from "../../molecules/AttendanceStatusCard";

export default function ViewClasses() {
  const [user_data, setUserData] = useRecoilState(authState);
  const [showAttendance, setShowAttendance] = useState(false);
  const [attendanceData, setAttendanceData] = useState(null);
  const [subjects, setSubjects] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axiosInstance.get("subject/all-subjects");
      if (data.success) {
        setSubjects(data.data);
      }
    }
    fetchData();
  }, []);
  const showAttendanceHandler = async (subjectId, subjectData) => {
    setShowAttendance(true);
    const { data } = await axiosInstance.post("/attendance/for-student", {
      userId: user_data.id,
      subjectId: subjectId,
    });
    if (data.success) {
      const attendanceViewData = { ...data.data, ...subjectData };
      console.log("data.data", data.data);
      console.log("subjectData", subjectData);
      setAttendanceData(attendanceViewData);
    }
  };
  return (
    <Box style={{ display: "flex" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: showAttendance ? "60%" : "100%",
          height: "85vh",
          padding: "5vh",
          paddingTop: "10vh",
          paddingBottom: "10vh",
          overflow: "scroll",
        }}
      >
        <Grid container spacing={5}>
          {subjects?.map((subjectData) => (
            <Grid item xs={showAttendance ? 6 : 4}>
              <SubjectCard
                key={subjectData.id}
                subjectData={subjectData}
                showAttendanceHandler={showAttendanceHandler}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: showAttendance ? "40%" : 0,
          height: "85vh",
        }}
      >
        {attendanceData ? (
          <AttendanceStatusCard
            attendanceData={attendanceData}
            handleAttendanceClose={setShowAttendance}
          />
        ) : null}
      </Box>
    </Box>
  );
}
