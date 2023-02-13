import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const panels = {
  FACULTY: [
    {
      icon: <AccountCircleIcon />,
      title: "Profile",
      href: "/dashboard/profile_faculty",
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
    {
      icon: <AssignmentIcon />,
      title: "Classes",
      href: "/dashboard/classes",
    },
  ],
  STUDENT: [
    {
      icon: <AccountCircleIcon />,
      title: "Profile",
      href: "/dashboard/profile_student",
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
    {
      icon: <AssignmentIcon />,
      title: "Classes",
      href: "/dashboard/classes",
    },
  ],
};

export default panels;
