import { InputNumber } from "antd";
import "./App.css";
import InputAmount from "./components/InputAmount";
import InputCheckBox from "./components/InputCheckBox";
import InputGooglePlaces from "./components/InputGooglePlaces";
import InputListBox from "./components/InputListBox";
import InputMultiUnitNumber from "./components/InputMultiUnitNumber";
import InputPercentage from "./components/InputPercentage";
import Navbar from "./components/Navbar";
import NumberInput from "./components/NumberInput";
import StringInput from "./components/StringInput";
import ProgressStepsProgressIcon from "./locofy/ProgressStepsProgressIcon";
import AuthScreen from "./locofy/screens/AuthScreen";
import BravoScreen from "./locofy/screens/BravoScreen";
import BusinessPlanMenu from "./locofy/screens/BusinessPlanMenu";
import EditBusinessPlan from "./locofy/screens/EditBusinessPlan";
import LoadingScreen from "./locofy/screens/LoadingScreen";
import PayementScreen from "./locofy/screens/PayementScreen";
import InputCalendar from "./components/InputCalendar";
import MultiInput from "./components/MultiInput";
import Stepper from "./components/Stepper";
// import ProgressSteps from "./components/ProgressSteps";

function App() {
  return (
    <div className="h-screen">
      {/* <ProgressSteps /> */}
      {/* <ProgressStepsProgressIcon /> */}
      {/* <Navbar /> */}
      {/* <BusinessPlanMenu /> */}
      {/* <EditBusinessPlan /> */}
      {/* <BravoScreen /> */}

      {/* <div className="p-10 bg-red-100 flex flex-col gap-10">
        <InputListBox />
        <NumberInput />
        <StringInput />
      </div> */}

      {/* <AuthScreen /> */}
      {/* <LoadingScreen /> */}
      {/* <PayementScreen /> */}
      <div className="flex py-10 flex-col gap-10 items-center justify-center">
        {/* <InputCheckBox />
        <InputGooglePlaces />
        
        <InputPercentage />
        <InputMultiUnitNumber />
        <InputAmount />
        <NumberInput />
        <StringInput />
        <InputCalendar />
        <MultiInput /> */}
        {/* <Stepper /> */}
        <InputListBox />
      </div>
    </div>
  );
}

export default App;
