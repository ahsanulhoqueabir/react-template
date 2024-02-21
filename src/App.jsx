import { Outlet } from "react-router-dom";
import Button from "./Components/Button";

const App = () => {
  return (
    <div className="p-20">
      <h1>React App</h1>
      <Button type="submit" >AHSANUL</Button>
      <Outlet />
    </div>
  );
};
export default App;
