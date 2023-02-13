import AuthPage from "./components/pages/AuthPage";

import { Outlet } from "react-router-dom";
import EmailVerification from "./components/pages/EmailVerification";
import EmailNotVerified from "./components/pages/EmailNotVerified";
import DashboardLayout from "./components/templates/Dashboard";
import ProfileDetailsS from "./components/pages/ProfileDetailsS";
import ProfileDetailsF from "./components/pages/ProfileDetailsF";
import ProfileS from "./components/pages/ProfileS";
import ProfileF from "./components/pages/ProfileF";
import ProfileType from "./components/pages/ProfileType";
import ViewClasses from "./components/pages/ViewClasses";
import Logout from "./components/atoms/Logout";
const routes = () => [
  { path: "auth", element: <AuthPage /> },
  { path: "email_not_verified", element: <EmailNotVerified /> },
  { path: "verify_email/:token", element: <EmailVerification /> },
  { path: "profile_type", element: <ProfileType /> },
  { path: "logout", element: <Logout /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "profile_details_student", element: <ProfileDetailsS /> },
      { path: "profile_details_faculty", element: <ProfileDetailsF /> },
      { path: "profile_student", element: <ProfileS /> },
      { path: "profile_faculty", element: <ProfileF /> },
      { path: "classes", element: <ViewClasses /> },
    ],
  },

  // { path: "/", element: <LandingPage /> },
];

export default routes;
