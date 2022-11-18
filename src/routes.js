import AuthPage from "./components/pages/AuthPage";

import { Outlet } from "react-router-dom";
import EmailVerification from "./components/pages/EmailVerification";
import EmailNotVerified from "./components/pages/EmailNotVerified";
import DashboardLayout from "./components/templates/Dashboard";
import ProfileDetails from "./components/pages/ProfileDetails";
import ProfileType from "./components/pages/ProfileType";

const routes = () => [
  { path: "auth", element: <AuthPage /> },
  { path: "email_not_verified", element: <EmailNotVerified /> },
  { path: "verify_email/:token", element: <EmailVerification /> },
  { path: "profile_type", element: <ProfileType /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [{ path: "profile_details", element: <ProfileDetails /> }],
  },

  // { path: "/", element: <LandingPage /> },
];

export default routes;
