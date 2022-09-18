import AuthPage from "./components/pages/AuthPage";
import Dashboard from "./components/pages/Dashboard";

const routes = () => [
  { path: "/auth", element: <AuthPage /> },
  { path: "/dashboard", element: <Dashboard /> },
];

export default routes;
