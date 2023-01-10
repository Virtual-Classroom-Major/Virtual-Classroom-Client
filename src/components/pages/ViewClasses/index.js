import { Box, Button, Grid, Typography } from "@mui/material";
import ClassCard from "../../molecules/ClassCard";
import NewClassModal from "../../organisms/NewClassModal";

export default function ViewClasses() {
  const classesData = [
    {
      id: "af7asd8f7a9sdf79",
      subject_id: "a98sdf9a87sdf",
      color: [171, 41, 41],
      start_time: new Date().getTime(),
      duration: 60,
      title: "Aerodynamics in Fluid",
      faculty_id: "a098sf7a89sd7fasd9f",
      target_batch: 2019,
      target_section: "C",
      subject_name: "Physics",
    },
    {
      id: "af7asd8f7a9sdf79",
      subject_id: "a98sdf9a87sdf",
      color: [161, 32, 137],
      start_time: new Date(),
      duration: 60,
      title: "Karate on Plane",
      faculty_id: "a098sf7a89sd7fasd9f",
      target_batch: 2019,
      target_section: "C",
      subject_name: "Maths",
    },
    {
      id: "af7as23d8f7a9sdf79",
      subject_id: "aa22398sdf9a87sdf",
      start_time: new Date(),
      color: [105, 32, 161],
      duration: 60,
      title: "book in Jungle",
      faculty_id: "a098s12f7a89sd7fasd9f",
      target_batch: 2018,
      target_section: "D",
      subject_name: "Geography",
    },
    {
      id: "af7as23d8f7a9sdf79",
      subject_id: "aa22398sdf9a87sdf",
      start_time: new Date(),
      color: [32, 56, 161],
      duration: 60,
      title: "Car in Fluid",
      faculty_id: "a098s12f7a89sd7fasd9f",
      target_batch: 2018,
      target_section: "D",
      subject_name: "Chemistry",
    },
    {
      id: "af7as23d8f7a9sdf79",
      subject_id: "aa22398sdf9a87sdf",
      start_time: new Date(),
      color: [82, 166, 36],
      duration: 60,
      title: "Camera in Water",
      faculty_id: "a098s12f7a89sd7fasd9f",
      target_batch: 2018,
      target_section: "D",
      subject_name: "Zoology",
    },
    {
      id: "af7as23d8f7a9sdf79",
      subject_id: "aa22398sdf9a87sdf",
      start_time: new Date(),
      color: [166, 112, 36],
      duration: 60,
      title: "Gases in Fluid",
      faculty_id: "a098s12f7a89sd7fasd9f",
      target_batch: 2018,
      target_section: "D",
      subject_name: "Compiler Design",
    },
  ];
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <NewClassModal />
      <Box
        style={{
          width: "100%",
          display: "flex",
          marginBottom: "2vh",
        }}
      >
        <Button
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
            <ClassCard classData={cls} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
