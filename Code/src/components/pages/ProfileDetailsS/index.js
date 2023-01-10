import { Box, Button, InputLabel, Grid, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { authState } from "../../../atom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import axiosInstance from "../../../services/axiosInstance";

export default function ProfileDetails() {
  const [batch, setBatch] = useState(2022);
  const [branch, setBranch] = useState("COMPUTER SCIENCE AND ENGINEERING");
  const [user_data, set_user_data] = useRecoilState(authState);

  console.log("user_data", user_data);
  const onSubmitHandler = async (values) => {
    values.stream = branch;
    values.user_type = user_data.user_type;
    values.batch = batch;

    console.log(values);
    const { data } = await axiosInstance.post(
      `/users/update-profile-details/${user_data.id}`,
      values
    );
  };
  const batchChangeHandler = (event) => {
    console.log(event);
    setBatch(event.target.value);
  };

  const branchChangeHandler = (event) => {
    console.log(event);
    setBranch(event.target.value);
  };

  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          width: "80vw",
          height: "max-content",
          display: "flex",
          paddingBottom: "5vh",
          borderRadius: "10px",
          boxShadow: "0px 0px 39px -19px rgba(0,0,0,0.47)",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            width: "20vh",
            marginTop: "5vh",
            marginBottom: "2vh",
            height: "20vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            backgroundColor: "#A98AD0",
          }}
        >
          <AddAPhotoOutlinedIcon
            style={{ color: "#CBB0ED", fontSize: "10vh" }}
          />
        </Box>
        <Typography
          variant="p"
          style={{
            fontWeight: "bold",
            color: "#909090",
            marginBottom: "10vh",
          }}
        >
          Profile Picture
        </Typography>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            roll_number: "",
            reg_number: "",
            batch: "",
            stream: "",
            degree_name: "",
            date_of_birth: "",
            parent_name: "",
            location: "",
          }}
          onSubmit={onSubmitHandler}
        >
          <Form>
            <Box
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
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
                  First Name
                </Typography>
                <Field
                  style={{
                    width: "20vw",
                    height: "6vh",
                    marginLeft: "10%",
                    borderRadius: "5px",
                    fontSize: "20px",
                    border: 0,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    backgroundColor: "#E6DAF5",
                    marginBottom: "5%",
                  }}
                  placeholder="John"
                  name="first_name"
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
                  Last Name
                </Typography>
                <Field
                  style={{
                    width: "20vw",
                    height: "6vh",
                    marginLeft: "10%",
                    borderRadius: "5px",
                    fontSize: "20px",
                    border: 0,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    backgroundColor: "#E6DAF5",
                    marginBottom: "5%",
                  }}
                  placeholder="Walker"
                  name="last_name"
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
                  Roll Number
                </Typography>
                <Field
                  style={{
                    width: "20vw",
                    height: "6vh",
                    marginLeft: "10%",
                    borderRadius: "5px",
                    fontSize: "20px",
                    border: 0,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    backgroundColor: "#E6DAF5",
                    marginBottom: "5%",
                  }}
                  placeholder="201910548"
                  name="roll_number"
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
                  Parent Name
                </Typography>
                <Field
                  style={{
                    width: "20vw",
                    height: "6vh",
                    marginLeft: "10%",
                    borderRadius: "5px",
                    fontSize: "20px",
                    border: 0,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    backgroundColor: "#E6DAF5",
                    marginBottom: "5%",
                  }}
                  placeholder="John"
                  name="parent_name"
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
                  Date Of Birth
                </Typography>
                <Field
                  type="Date"
                  style={{
                    width: "20vw",
                    height: "6vh",
                    marginLeft: "10%",
                    borderRadius: "5px",
                    fontSize: "20px",
                    border: 0,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    backgroundColor: "#E6DAF5",
                    marginBottom: "5%",
                  }}
                  placeholder="John"
                  name="date_of_birth"
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
                  Reg. No.
                </Typography>
                <Field
                  style={{
                    width: "20vw",
                    height: "6vh",
                    marginLeft: "10%",
                    borderRadius: "5px",
                    fontSize: "20px",
                    border: 0,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    backgroundColor: "#E6DAF5",
                    marginBottom: "5%",
                  }}
                  placeholder="1901202123"
                  name="reg_number"
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
                  Branch
                </Typography>

                <FormControl>
                  <Select
                    id="demo-simple-select"
                    value={branch}
                    placeholder="COMPUTER SCIENCE AND ENGINEERING"
                    style={{ width: "20vw", backgroundColor: "#E6DAF5" }}
                    onChange={branchChangeHandler}
                  >
                    <MenuItem value={"COMPUTER SCIENCE AND ENGINEERING"}>
                      COMPUTER SCIENCE AND ENGINEERING
                    </MenuItem>
                    <MenuItem value={"ELECTRONICS AND COMMUNICATION"}>
                      ELECTRONICS AND COMMUNICATION
                    </MenuItem>
                    <MenuItem value={"INFORMATION TECHNOLOGY</"}>
                      INFORMATION TECHNOLOGY
                    </MenuItem>
                    <MenuItem value={"ELECTRICAL AND ELECTRONICS"}>
                      ELECTRICAL AND ELECTRONICS
                    </MenuItem>
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
                  Batch
                </Typography>

                <FormControl>
                  <Select
                    id="demo-simple-select"
                    value={batch}
                    style={{ width: "20vw", backgroundColor: "#E6DAF5" }}
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
                  Location
                </Typography>
                <Field
                  style={{
                    width: "20vw",
                    height: "6vh",
                    marginLeft: "10%",
                    borderRadius: "5px",
                    fontSize: "20px",
                    border: 0,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    backgroundColor: "#E6DAF5",
                    marginBottom: "5%",
                  }}
                  placeholder="22 Baker Street"
                  name="location"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}
