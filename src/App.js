import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./redux/templates/AuthTemplate";
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home template */}
        {/* Add your home route here */}
        
        {/* auth template */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
