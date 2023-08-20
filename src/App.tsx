import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthScreen from "./locofy/screens/AuthScreen";
import { GoogleOAuthProvider } from "@react-oauth/google";
import BusinessPlanMenu from "./locofy/screens/BusinessPlanMenu";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={
            <GoogleOAuthProvider
              clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}
            >
              <AuthScreen />
            </GoogleOAuthProvider>
          }
        />
        <Route path={"/business-plan"} element={<BusinessPlanMenu />} />
      </Routes>
    </div>
  );
}

export default App;
