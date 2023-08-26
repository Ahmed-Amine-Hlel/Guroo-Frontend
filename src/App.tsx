import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthScreen from "./locofy/screens/AuthScreen";
import { GoogleOAuthProvider } from "@react-oauth/google";
import BusinessPlanMenu from "./locofy/screens/BusinessPlanMenu";
import CreateBusinessPlan from "./locofy/screens/CreateBusinessPlan";
// import EditBusinessPlan from "./locofy/screens/EditBusinessPlan";
import NewBusinessPlan from "./locofy/screens/NewBusinessPlan";
import PayementScreen from "./locofy/screens/PayementScreen";
// import InputAmount from "./components/InputAmount";
// import InputCalendar from "./components/InputCalendar";
// import InputCheckBox from "./components/InputCheckBox";
// import InputListBox from "./components/InputListBox";
// import InputPercentage from "./components/InputPercentage";
// import NumberInput from "./components/NumberInput";
// import StringInput from "./components/StringInput";
// import InputMultiUnitNumber from "./components/InputMultiUnitNumber";
// import MultiInput from "./components/MultiInput";
// import EditBusinessPlan from "./locofy/screens/EditBusinessPlan";
// import Stepper from "./components/Stepper";
// import BravoScreen from "./locofy/screens/BravoScreen";
// import FloatingActionButton from "./components/FAB/FloatingActionButton";
function App() {
  return (
    <>
      {/* <div className="h-screen">
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<AuthScreen />} />
            <Route path={"/business-plan"} element={<BusinessPlanMenu />} />
            <Route
              path={"/create-business-plan"}
              element={<CreateBusinessPlan />}
            />
            <Route path={"/new-business-plan"} element={<NewBusinessPlan />} />
          </Routes>
        </GoogleOAuthProvider>
      </div> */}

      {/* <div className="flex flex-col gap-8 justify-center items-center h-screen"> 
      <InputCheckBox />
        <InputAmount />
        <InputCalendar />
        <InputListBox />
        <InputPercentage />
        <NumberInput />
        <StringInput />
        <InputMultiUnitNumber />
        <MultiInput /> 
        <Stepper />  
       <FloatingActionButton />
      </div> */}
      <PayementScreen />
    </>
  );
}

export default App;
