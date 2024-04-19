import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./redux/templates/AuthTemplate";
import loginPage from "./pages/loginPage/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home template */}
        {/* Add your home route here */}
        
        {/* auth template */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<loginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
