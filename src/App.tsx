import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthScreen from "./locofy/screens/AuthScreen";
import { GoogleOAuthProvider } from "@react-oauth/google";
import BusinessPlanMenu from "./locofy/screens/BusinessPlanMenu";
import CreateBusinessPlan from "./locofy/screens/CreateBusinessPlan";
import NewBusinessPlan from "./locofy/screens/NewBusinessPlan";
import PayementScreen from "./locofy/screens/PayementScreen";
import PrePayementScreen from "./locofy/screens/PrePayementScreen";
import EditBusinessPlan from "./locofy/screens/EditBusinessPlan";
// import MSTable from "./components/MSTable";

function App() {
  const location = useLocation();
  const pathsWithoutNavbar = ["/payment", "/pre-payment"];
  return (
    <>
      <div className="h-screen">
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
          {!pathsWithoutNavbar.includes(location.pathname) && <Navbar />}
          <Routes>
            <Route path={"/"} element={<AuthScreen />} />
            <Route path={"/business-plan"} element={<BusinessPlanMenu />} />
            <Route
              path={"/create-business-plan"}
              element={<CreateBusinessPlan />}
            />
            <Route path={"/new-business-plan"} element={<NewBusinessPlan />} />
            <Route path={"/payment"} element={<PayementScreen />} />
            <Route path={"/pre-payment"} element={<PrePayementScreen />} />
            <Route
              path={"/edit-business-plan/:uid"}
              element={<EditBusinessPlan />}
            />
          </Routes>
        </GoogleOAuthProvider>
        {/* <MSTable /> */}
      </div>
    </>
  );
}

export default App;
