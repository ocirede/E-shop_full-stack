import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserProvider from "./context/userContext";
import ConfirmedEmail from "./pages/ConfirmedEmail";
import ForgotPassword from "./pages/ForgotPassword";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profileform" element={<ProfilePage/>}/>
            <Route path="/orders" element={<OrdersPage/>}/>
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/confirmedemail/:token" element={<ConfirmedEmail/>}/>
            <Route path="forgotpassword" element={<ForgotPassword/>}/>
          </Route>
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
