import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
const panels = {
  FACULTY: [
    {
      icon: <AccountCircleIcon style={{ color: "#F26430" }} />,
      title: "Profile",
      href: "/dashboard/profile_faculty",
    },

    {
      icon: <AssignmentIcon style={{ color: "#F2FF49" }} />,
      title: "Assignments",
      href: "",
    },
    {
      icon: <AssignmentIcon style={{ color: "#FF6978" }} />,
      title: "Classes",
      href: "/dashboard/classes",
    },
    {
      icon: <ModeEditOutlineIcon style={{ color: "#17BEBB" }} />,
      title: "Edit Profile",
      href: "/dashboard/profile_details_faculty",
    },
    {
      icon: <PowerSettingsNewIcon style={{ color: "#ff0000" }} />,
      title: "Logout",
      href: "/logout",
    },
  ],
  STUDENT: [
    {
      icon: <AccountCircleIcon style={{ color: "#F26430" }} />,
      title: "Profile",
      href: "/dashboard/profile_student",
    },
    {
      icon: <MenuBookIcon />,
      title: "Subjects",
      href: "/dashboard/attendance",
    },
    {
      icon: <AssignmentIcon />,
      title: "Assignments",
      href: "",
    },
    {
      icon: <AssignmentIcon style={{ color: "#FF6978" }} />,
      title: "Classes",
      href: "/dashboard/classes",
    },
    {
      icon: <ModeEditOutlineIcon style={{ color: "#17BEBB" }} />,
      title: "Edit Profile",
      href: "/dashboard/profile_details_student",
    },
    {
      icon: <PowerSettingsNewIcon style={{ color: "#ff0000" }} />,
      title: "Logout",
      href: "/logout",
    },
  ],
};

export default panels;
