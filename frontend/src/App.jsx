
import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Toaster} from "sonner"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} /> 
        </Route>

        <Route>{/* Admin Layout */}</Route>
      </Routes>
      <Toaster position = "top-right" richColors/>
    </BrowserRouter>
  );
};

export default App;
