import AuthPage from "./components/pages/AuthPage";
import Dashboard from "./components/pages/Dashboard";
import EmailVerification from "./components/pages/EmailVerification";
const routes = () => [
  { path: "/auth", element: <AuthPage /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/verifyEmail/:token", element: <EmailVerification /> },
];

export default routes;
