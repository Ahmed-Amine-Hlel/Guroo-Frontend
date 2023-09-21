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

function App() {
  const location = useLocation();

  const pathsWithoutNavbar = ["/payment/:businessPlanId", "/pre-payment"];

  const isPathInList = (path: string, pathsList: string[]) => {
    const segments = path.split("/").filter(Boolean);
    for (let knownPath of pathsList) {
      const knownSegments = knownPath.split("/").filter(Boolean);
      if (segments.length !== knownSegments.length) continue;
      let match = true;
      for (let i = 0; i < segments.length; i++) {
        if (knownSegments[i].startsWith(":")) continue;
        if (segments[i] !== knownSegments[i]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
    return false;
  };

  const shouldHideNavbar = isPathInList(location.pathname, pathsWithoutNavbar);

  return (
    <div className="h-screen">
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
        {!shouldHideNavbar && <Navbar />}
        <Routes>
          <Route path={"/"} element={<AuthScreen />} />
          <Route path={"/business-plan"} element={<BusinessPlanMenu />} />
          <Route
            path={"/create-business-plan"}
            element={<CreateBusinessPlan />}
          />
          <Route path={"/new-business-plan"} element={<NewBusinessPlan />} />
          <Route
            path={"/payment/:businessPlanId"}
            element={<PayementScreen />}
          />
          <Route path={"/pre-payment"} element={<PrePayementScreen />} />
          <Route
            path={"/edit-business-plan/:uid"}
            element={<EditBusinessPlan />}
          />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
