import { Box, Button, Grid, Typography } from "@mui/material";
import ClassCard from "../../molecules/ClassCard";
import { useState } from "react";
import NewClassModal from "../../organisms/NewClassModal";
import { useEffect } from "react";
import axiosInstance from "../../../services/axiosInstance";
import { useRecoilState } from "recoil";
import { authState } from "../../../atom";
import AttendanceViewerModal from "../../organisms/AttendanceViewerModal";

export default function ViewClasses() {
  const [showModal, setShowModal] = useState(false);
  const [user_data, setUserData] = useRecoilState(authState);
  const [classesData, setClassesData] = useState([]);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [classId, setClassId] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const { id } = user_data;
      const { data } = await axiosInstance.get(`class/by-faculty-id/${id}`);
      console.log(data);
      setClassesData(data.data);
    }
    fetchData();
  }, []);
  const handleAttendanceViewer = (class_id) => {
    setClassId(class_id);
    setShowAttendanceModal(true);
  };
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <NewClassModal showModal={showModal} setShowModal={setShowModal} />
      <AttendanceViewerModal
        showModal={showAttendanceModal}
        setShowModal={setShowAttendanceModal}
        classId={classId}
      />
      <Box
        style={{
          width: "100%",
          display: "flex",
          marginBottom: "2vh",
        }}
      >
        <Button
          onClick={() => setShowModal(true)}
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto", backgroundColor: "rgb(143, 52, 235)" }}
        >
          Create Class
        </Button>
      </Box>
      <Grid container spacing={4}>
        {classesData.map((cls) => (
          <Grid item xs={3}>
            <ClassCard
              classData={cls}
              attendanceHandler={handleAttendanceViewer}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
