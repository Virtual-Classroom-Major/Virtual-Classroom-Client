import { Box, Typography, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Formik, Form, Field } from "formik";
import { useRecoilState } from "recoil";
import hexRgb from "hex-rgb";
import { useState } from "react";
import { authState } from "../../../atom";
import axiosInstance from "../../../services/axiosInstance";

export default function NewClassModal({ showModal, setShowModal }) {
  const [batch, setBatch] = useState(2022);
  const [subject, setSubject] = useState("Maths");
  const [section, setSection] = useState("A");
  const [branch, setBranch] = useState("COMPUTER SCIENCE AND ENGINEERING");
  const [user_data, set_user_data] = useRecoilState(authState);
  const onSubmitHandler = async (values) => {
    values.target_batch = batch;
    values.target_section = section;
    values.faculty_id = user_data.id;
    values.subject_id = "someid";
    values.color = hexRgb(values.color, { format: "array" });

    console.log("values", values);
    const { data } = await axiosInstance.post(`/class`, values);
    console.log("postdata", data);
  };
  const batchChangeHandler = (event) => {
    console.log(event);
    setBatch(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    console.log(event);
    setSubject(event.target.value);
  };

  const sectionChangeHandler = (event) => {
    console.log(event);
    setSection(event.target.value);
  };
  return (
    <Box>
      {showModal ? (
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
              backgroundColor: "rgba(250,250,250,0.92)",
              borderRadius: "2vh",
              border: "4px solid rgb(230,230,230)",
              boxShadow: "0 0 15px 1px rgba(10,10,10,0.4)",
              overflow: "scroll",
            }}
          >
            <Formik
              initialValues={{
                start_time: "",
                duration: 0,
                title: "",
                subject: "",
                target_batch: 0,
                target_section: "",
              }}
              onSubmit={onSubmitHandler}
            >
              <Form>
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
                    New Class
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      marginLeft: "auto",
                      marginRight: "1vw",
                      backgroundColor: "rgb(143, 52, 235)",
                    }}
                    type="submit"
                  >
                    Create
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      marginRight: "1vw",
                      backgroundColor: "red",
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </Button>
                </Box>

                <Box
                  style={{
                    width: "90%",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "#404040",
                      lineHeight: "5vh",
                      minWidth: "7vw",
                    }}
                  >
                    Class Title
                  </Typography>
                  <Field
                    style={{
                      width: "20vw",
                      height: "6vh",
                      marginLeft: "auto",
                      borderRadius: "5px",
                      fontSize: "20px",
                      border: 0,
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "#E6DAF5",
                      marginBottom: "5%",
                    }}
                    placeholder="Laws Of Motion"
                    name="title"
                    id="outlined-basic"
                    variant="outlined"
                  />
                </Box>
                <Box
                  style={{
                    width: "40%",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "#404040",
                      lineHeight: "5vh",
                      minWidth: "7vw",
                    }}
                  >
                    Subject
                  </Typography>

                  <FormControl>
                    <Select
                      id="demo-simple-select"
                      name="subject"
                      value={subject}
                      style={{ width: "20vw", backgroundColor: "#E6DAF5" }}
                      onChange={subjectChangeHandler}
                    >
                      <MenuItem value={"Maths"}>Maths</MenuItem>
                      <MenuItem value={"Physics"}>Physics</MenuItem>
                      <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box
                  style={{
                    width: "90%",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "#404040",
                      lineHeight: "5vh",
                      minWidth: "7vw",
                    }}
                  >
                    Target Batch
                  </Typography>

                  <FormControl>
                    <Select
                      id="demo-simple-select"
                      value={batch}
                      name="target_batch"
                      style={{
                        width: "20vw",
                        backgroundColor: "#E6DAF5",
                      }}
                      onChange={batchChangeHandler}
                    >
                      <MenuItem value={2022}>2022</MenuItem>
                      <MenuItem value={2021}>2021</MenuItem>
                      <MenuItem value={2020}>2020</MenuItem>
                      <MenuItem value={2019}>2019</MenuItem>
                      <MenuItem value={2018}>2018</MenuItem>
                      <MenuItem value={2017}>2017</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box
                  style={{
                    width: "40%",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "#404040",
                      lineHeight: "5vh",
                      minWidth: "7vw",
                    }}
                  >
                    Target Sec
                  </Typography>

                  <FormControl>
                    <Select
                      id="demo-simple-select"
                      value={section}
                      name="target_section"
                      style={{ width: "20vw", backgroundColor: "#E6DAF5" }}
                      onChange={sectionChangeHandler}
                    >
                      <MenuItem value={"A"}>A</MenuItem>
                      <MenuItem value={"B"}>B</MenuItem>
                      <MenuItem value={"C"}>C</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box
                  style={{
                    width: "90%",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "#404040",
                      lineHeight: "5vh",
                      minWidth: "7vw",
                    }}
                  >
                    Start Time
                  </Typography>
                  <Field
                    style={{
                      width: "20vw",
                      height: "6vh",

                      marginLeft: "auto",
                      borderRadius: "5px",
                      fontSize: "20px",
                      border: 0,
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "#E6DAF5",
                      marginBottom: "5%",
                    }}
                    type="datetime-local"
                    name="start_time"
                    id="outlined-basic"
                    variant="outlined"
                  />
                </Box>
                <Box
                  style={{
                    width: "90%",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "#404040",
                      lineHeight: "5vh",
                      minWidth: "7vw",
                    }}
                  >
                    Duration
                  </Typography>
                  <Field
                    style={{
                      width: "20vw",
                      marginLeft: "auto",
                      height: "6vh",

                      borderRadius: "5px",
                      fontSize: "20px",
                      border: 0,
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "#E6DAF5",
                      marginBottom: "5%",
                    }}
                    type="number"
                    name="duration"
                    id="outlined-basic"
                    variant="outlined"
                  />
                </Box>
                <Box
                  style={{
                    width: "90%",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "#404040",
                      lineHeight: "5vh",
                      minWidth: "7vw",
                    }}
                  >
                    Card Color
                  </Typography>
                  <Field
                    style={{
                      width: "20vw",
                      height: "6vh",
                      marginLeft: "auto",
                      borderRadius: "5px",
                      fontSize: "20px",
                      border: 0,
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      backgroundColor: "#E6DAF5",
                      marginBottom: "5%",
                    }}
                    type="color"
                    name="color"
                    id="outlined-basic"
                    variant="outlined"
                  />
                </Box>
              </Form>
            </Formik>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
