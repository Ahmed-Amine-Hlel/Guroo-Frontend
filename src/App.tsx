import "./App.css";
import Navbar from "./components/Navbar";
import ProgressStepsProgressIcon from "./locofy/ProgressStepsProgressIcon";
import BusinessPlanMenu from "./locofy/screens/BusinessPlanMenu";
// import ProgressSteps from "./components/ProgressSteps";

function App() {
  return (
    <div className="h-screen">
      {/* <ProgressSteps /> */}
      {/* <ProgressStepsProgressIcon /> */}
      <Navbar />
      <BusinessPlanMenu />
    </div>
  );
}

export default App;
