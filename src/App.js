import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useRecoilState } from "recoil";
import { authState } from "./atom";

function App() {
  const routing = useRoutes(routes());
  return <div className="App">{routing}</div>;
}

export default App;
