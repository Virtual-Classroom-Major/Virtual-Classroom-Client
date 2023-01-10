import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const panels = {
  FACULTY: [
    {
      icon: <AccountCircleIcon />,
      title: "Profile",
      href: "",
    },
    {
      icon: <SchoolIcon />,
      title: "Classes",
      href: "",
    },
    {
      icon: <AssignmentIcon />,
      title: "Assignments",
      href: "",
    },
  ],
  STUDENT: [
    {
      icon: <AccountCircleIcon />,
      title: "Profile",
      href: "",
    },
    {
      icon: <MenuBookIcon />,
      title: "Subjects",
      href: "",
    },
    {
      icon: <AssignmentIcon />,
      title: "Assignments",
      href: "",
    },
  ],
};

export default panels;
