import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthScreen from "./locofy/screens/AuthScreen";
import { GoogleOAuthProvider } from "@react-oauth/google";
import BusinessPlanMenu from "./locofy/screens/BusinessPlanMenu";

function App() {
  return (
    <div className="h-screen">
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<AuthScreen />} />
          <Route path={"/business-plan"} element={<BusinessPlanMenu />} />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
